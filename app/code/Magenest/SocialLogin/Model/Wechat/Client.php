<?php
namespace Magenest\SocialLogin\Model\Wechat;

use Magenest\SocialLogin\Model\AbstractClient;
use Magento\Framework\Exception\LocalizedException;

use Magento\Backend\App\ConfigInterface;
use Magento\Framework\DataObject;
use Magento\Framework\HTTP\ZendClientFactory;
use Magento\Framework\UrlInterface;

class Client
{
    protected $redirect_uri_path = 'sociallogin/wechat/connect/';
    protected $path_enabled = 'magenest/credentials/wechat/enabled';
    protected $path_client_id = 'magenest/credentials/wechat/app_id';
    protected $path_client_secret = 'magenest/credentials/wechat/app_secret';
    protected $path_type = 'magenest/credentials/wechat/type';
    protected $oauth2_service_uri = '';
    protected $oauth2_auth_uri = 'https://open.weixin.qq.com/connect/qrconnect';
    protected $oauth2_token_uri = 'sns/oauth2/access_token';
    protected $oauth2_user = 'sns/userinfo';

    /**
     * @var string
     */
    protected $_config;

    /**
     * @var ZendClientFactory
     */
    protected $_httpClientFactory;

    /**
     * @var UrlInterface
     */
    protected $_url;

    /**
     * @var
     */
    protected $_helperData;

    /**
     * @var null|string
     */
    protected $clientId = null;

    /**
     * @var null|string
     */
    protected $clientSecret = null;

    /**
     * @var null|string
     */
    protected $redirectUri = null;

    /**
     * @var null
     */
    protected $state = null;

    /**
     * @var
     */
    protected $token;


    public function __construct(
        ZendClientFactory $httpClientFactory,
        ConfigInterface $config,
        UrlInterface $url)
    {
        $this->_httpClientFactory = $httpClientFactory;
        $this->_config = $config;
        $this->_url = $url;
        $this->redirectUri = $this->_url->getBaseUrl().$this->redirect_uri_path;
        $this->clientId = $this->getClientId();
        $this->clientSecret = $this->getClientSecret();
        $this->_config = $config;
        $this->oauth2_auth_uri = $this->getTypeOfficial() === 1 ? "https://api.weixin.qq.com/":"https://api.wechat.com/";
    }

    public function getRedirectUri()
    {
        return $this->redirectUri;
    }

    public function getState()
    {
        return $this->state;
    }

    public function setState($state)
    {
        $this->state = $state;
    }

    public function setAccessToken($token)
    {
        $this->token = $token;
    }

    public function isEnabled()
    {
        return $this->_getStoreConfig($this->path_enabled);
    }

    protected function getClientId()
    {
        return $this->_getStoreConfig($this->path_client_id);
    }

    protected function getClientSecret()
    {
        return $this->_getStoreConfig($this->path_client_secret);
    }

    public function getAccessToken()
    {
        return $this->token;
    }

    public function getTypeOfficial(){
        return $this->_getStoreConfig($this->path_type);
    }

    protected function _getStoreConfig($xmlPath)
    {
        return $this->_config->getValue($xmlPath);
    }

    public function createAuthUrl()
    {
        $query = [
            'appid' => $this->getClientId(),
            'redirect_uri' => $this->getRedirectUri(),
            'scope' => 'snsapi_login',
            'response_type' => "code"
        ];
        $url = $this->oauth2_auth_uri. '?' . http_build_query($query);
        return $url;
    }

    /**
     * @param $endpoint
     * @param $code
     * @param string $method
     * @param array $params
     * @return mixed
     * @throws LocalizedException
     */
    public function api($endpoint, $code, $method = 'GET', $params = [])
    {
        if (empty($this->token)) {
            $openid = $this->fetchWechatAccessToken($code);
        }

        $params = array_merge([
            'access_token' => $this->token,
            'openid' => $openid,
        ], $params);
        $url = $this->oauth2_service_uri.$this->oauth2_user. '?'. http_build_query($params);
        $response = $this->_request($url);
        return $response;
    }

    private function fetchWechatAccessToken($code)
    {
        $params = [
            'appid' => $this->getClientId(),
            'secret' => $this->getClientSecret(),
            'code' => $code,
            'grant_type' => 'authorization_code'
        ];
        if (empty($code)) {
            throw new LocalizedException(
                __('Unable to retrieve access code.')
            );
        }
        $url = $this->oauth2_service_uri.$this->oauth2_token_uri . '?' . http_build_query($params);
        $response = $this->_request($url);
        $this->token = $response['access_token'];
        return $response['openid'];
    }

    public function _request($url, $method = 'GET', $params = [], $headers = [])
    {
        $client = $this->_httpClientFactory->create();
        $headers = array_merge([
            'Accept' => 'application/json'
        ], $headers);
        $client->setHeaders($headers);
        $client->setUri($url);

        $response = $client->request($method);
        $decodedResponse = json_decode($response->getBody(), true);
        if (empty($decodedResponse)) {
            $parsed_response = array();
            parse_str($response->getBody(), $parsed_response);
            $decodedResponse = json_decode(json_encode($parsed_response), true);
        }
        if ($response->isError()) {
            $message = sprintf(
                __('HTTP error occurred while issuing request.')
            );
            throw new LocalizedException(__($message));
        }
        return $decodedResponse;
    }

}

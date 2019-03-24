<?php
namespace Magenest\SocialLogin\Model\Zalo;

use Magenest\SocialLogin\Model\AbstractClient;
use Magento\Framework\Exception\LocalizedException;

class Client extends AbstractClient
{
    protected $redirect_uri_path = 'sociallogin/zalo/connect/';
    protected $path_enabled = 'magenest/credentials/zalo/enabled';
    protected $path_client_id = 'magenest/credentials/zalo/client_id';
    protected $path_client_secret = 'magenest/credentials/zalo/client_secret';
    protected $oauth2_service_uri = 'https://oauth.zaloapp.com/v3/';
    protected $oauth2_auth_uri = 'https://oauth.zaloapp.com/v3/auth';
    protected $oauth2_token_uri = 'https://oauth.zaloapp.com/v3/access_token';
    protected $zalo_me = 'https://graph.zalo.me/v2.0/me';
    protected $scope = ['zalo'];

    public function createAuthUrl()
    {
        $query = [
            'app_id' => $this->getClientId(),
            'redirect_uri' => $this->getRedirectUri(),
            'scope' => implode(',', $this->getScope()),
            'response_type' => "code"
        ];
        $url = $this->oauth2_auth_uri . '?' . http_build_query($query);
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
            $this->fetchZaloAccessToken($code);
        }
        $method = strtoupper($method);

        $params = array_merge([
            'access_token' => $this->token
        ], $params);
        $response = $this->_httpRequest($this->zalo_me, $method, $params);
        return $response;
    }

    private function fetchZaloAccessToken($code)
    {
        $params = [
            'app_id' => $this->getClientId(),
            'app_secret' => $this->getClientSecret(),
            'code' => $code,
            'redirect_uri' => $this->getRedirectUri()
        ];
        if (empty($code)) {
            throw new LocalizedException(
                __('Unable to retrieve access code.')
            );
        }
        $url = $this->oauth2_token_uri . '?' . http_build_query($params);
        $response = $this->_request($url);
        $this->token = $response['access_token'];
        return $response['access_token'];
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

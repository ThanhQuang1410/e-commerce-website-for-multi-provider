<?php
namespace Magenest\SocialLogin\Model\Kakao;

use Magenest\SocialLogin\Model\AbstractClient;
use Magento\Framework\Exception\LocalizedException;

class Client extends AbstractClient
{
    protected $redirect_uri_path = 'sociallogin/kakao/connect/';
    protected $path_enabled = 'magenest/credentials/kakao/enabled';
    protected $path_client_id = 'magenest/credentials/kakao/rest_api_key';
    protected $kauth_host = 'https://kauth.kakao.com';
    protected $kapi_host = 'https://kapi.kakao.com';
    protected $oauth2_auth_authorize = '/oauth/authorize';
    protected $oauth2_auth_token = '/oauth/token';
    protected $grant_type = 'authorization_code';
    protected $scope = "talk_message";

    public function createAuthUrl()
    {
        $query = [
            'client_id' => $this->getClientId(),
            'redirect_uri' => $this->getRedirectUri(),
            'response_type' => "code",
            'scope' => $this->scope
        ];
        $url = $this->kauth_host.$this->oauth2_auth_authorize . '?' . http_build_query($query);
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
            $this->fetchKakaoAccessToken($code);
        }
        $method = strtoupper($method);

        $params = array_merge([
            'access_token' => $this->token
        ], $params);
        $response = $this->_httpRequest($this->kapi_host.$endpoint, $method, $params);
        $response['access_token'] = $this->token;
        return $response;
    }

    private function fetchKakaoAccessToken($code)
    {
        $params = [
            'grant_type' => $this->grant_type,
            'client_id' => $this->getClientId(),
            'code' => $code,
            'redirect_uri' => $this->getRedirectUri()
        ];
        if (empty($code)) {
            throw new LocalizedException(
                __('Unable to retrieve access code.')
            );
        }
        $url = $this->kauth_host.$this->oauth2_auth_token . '?' . http_build_query($params);
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

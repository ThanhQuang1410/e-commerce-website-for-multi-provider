<?php
namespace Magenest\SocialLogin\Model\Reddit;

use Magenest\SocialLogin\Model\AbstractClient;
use Magento\Framework\Exception\LocalizedException;

class Client extends AbstractClient
{
    protected $redirect_uri_path = 'sociallogin/reddit/connect';
    protected $path_enabled='magenest/credentials/reddit/enabled';
    protected $path_client_id ='magenest/credentials/reddit/client_id';
    protected $path_client_secret='magenest/credentials/reddit/client_secret';
    protected $oauth2_service_uri= 'https://oauth.reddit.com/api/v1';
    protected $oauth2_auth_uri ='https://www.reddit.com/api/v1/authorize';
    protected $oauth2_token_uri = 'https://www.reddit.com/api/v1/access_token';
    protected $scope = [
        'identity'
    ];

    public function createAuthUrl()
    {
        $query = [
            'client_id' => $this->getClientId(),
            'response_type' => 'code',
            'state' => 'access',
            'redirect_uri' => $this->getRedirectUri(),
            'duration' => 'temporary',
            'scope' => implode(' ', $this->getScope())
        ];
        $url = $this->oauth2_auth_uri . '?' . http_build_query($query);
        return $url;
    }

    public function api($endpoint, $code, $method = 'GET', $params = [])
    {
        if (empty($this->token)) {
            $this->fetchAccessToken($code);
        }
        $url = $this->oauth2_service_uri . $endpoint;

        $method = strtoupper($method);
        $params = array_merge([
            'access_token' => $this->token
        ], $params);

        $headers = ['Authorization'=>'Bearer '.$this->token];
        $response = $this->_httpRequest($url, $method, $params,$headers);
        return $response;
    }

    protected function fetchAccessToken($code = null) {
        $token_array = [
            'grant_type' => 'authorization_code',
            'code' => $code,
            'redirect_uri' => $this->getRedirectUri() ];
        if (empty($code)) {
            throw new LocalizedException( __('Unable to retrieve access code.') );
        }
        $headers = ['Authorization'=>'Basic '.base64_encode($this->getClientId().':'.$this->getClientSecret())];
        $response = $this->_httpRequest(
            $this->oauth2_token_uri,
            'POST', $token_array,
            $headers );
        $this->setAccessToken($response['access_token']);
        return $this->getAccessToken();
    }
}

<?php
namespace Magenest\SocialLogin\Model\Linkedin;

use Magenest\SocialLogin\Model\AbstractClient;
use Magento\Framework\Exception\LocalizedException;

/**
 * Class Client
 * @package Magenest\SocialLogin\Model\Linkedin
 */
class Client extends AbstractClient
{
    protected $redirect_uri_path  = 'sociallogin/linkedin/connect/';
    protected $path_enabled='magenest/credentials/linkedin/enabled';
    protected $path_client_id ='magenest/credentials/linkedin/client_id';
    protected $path_client_secret = 'magenest/credentials/linkedin/client_secret';
    protected $oauth2_service_uri='https://api.linkedin.com/v1';
    protected $oauth2_auth_uri='https://www.linkedin.com/uas/oauth2/authorization';
    protected $oauth2_token_uri = 'https://www.linkedin.com/uas/oauth2/accessToken';
    protected $scope = ['r_basicprofile', 'r_emailaddress'];

    public function createAuthUrl()
    {
        $query = [
            'response_type' => 'code',
            'redirect_uri' => $this->getRedirectUri(),
            'client_id' => $this->getClientId(),
            'scope' => implode(" ", $this->getScope()),
            'state' => 'sociallogin'
        ];
        $url = $this->oauth2_auth_uri . '?' . http_build_query($query);
        return $url;
    }

    public function api($endpoint, $code, $method = 'GET', $params = array())
    {
        if (empty($this->token)) {
            $this->fetchAccessToken($code);
        }
        $url = $this->oauth2_service_uri . $endpoint;
        $method = strtoupper($method);
        $params = array_merge(array(
            'oauth2_access_token' => $this->token
        ), $params);
        $response = $this->_httpRequest($url, $method, $params);
        return $response;
    }

    protected function fetchAccessToken($code = null)
    {
        $token_array =[
            'code' => $code,
            'redirect_uri' => $this->getRedirectUri(),
            'client_id' => $this->getClientId(),
            'client_secret' => $this->getClientSecret(),
            'grant_type' => 'authorization_code'
        ];
        if (empty($code)) {
            throw new LocalizedException(
                __('Unable to retrieve access code.')
            );
        }
        $response = $this->_httpRequest(
            $this->oauth2_token_uri,
            'POST',
            $token_array
        );
        $this->setAccessToken($response['access_token']);
        return $this->getAccessToken();
    }
}

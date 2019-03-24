<?php
namespace Magenest\SocialLogin\Model\Pinterest;

use Magenest\SocialLogin\Model\AbstractClient;
use Magento\Framework\Exception\LocalizedException;

/**
 * Class Client
 * @package Magenest\SocialLogin\Model\Pinterest
 */
class Client extends AbstractClient
{

    protected $redirect_uri_path  = 'sociallogin/pinterest/connect/';
    protected $path_enabled = 'magenest/credentials/pinterest/enabled';
    protected $path_client_id = 'magenest/credentials/pinterest/client_id';
    protected $path_client_secret = 'magenest/credentials/pinterest/client_secret';
    protected $oauth2_service_uri = 'https://api.pinterest.com/v1';
    protected $oauth2_auth_uri = 'https://api.pinterest.com/oauth';
    protected $oauth2_token_uri = 'https://api.pinterest.com/v1/oauth/token';
    protected $scope = ['read_public','write_public'];

    public function createAuthUrl()
    {
        $query = [
            'response_type' => 'code' ,
            'client_id' => $this->getClientId(),
            'state' => $this->getState(),
            'scope' => implode(' ', $this->getScope()),
            'redirect_uri' => $this->getRedirectUri()
        ];
        $url = $this->oauth2_auth_uri . '?' . http_build_query($query);
        return $url;
    }

    protected function fetchAccessToken($code = null)
    {
        $token_array = [
            'grant_type' => 'authorization_code',
            'client_id' => $this->getClientId(),
            'client_secret' => $this->getClientSecret(),
            'code' => $code
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

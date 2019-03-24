<?php
namespace Magenest\SocialLogin\Model\Google;

use Magenest\SocialLogin\Model\AbstractClient;
use Magento\Framework\Exception\LocalizedException;

class Client extends AbstractClient
{
    protected $redirect_uri_path = 'sociallogin/google/connect/';
    protected $path_enabled='magenest/credentials/google/enabled';
    protected $path_client_id ='magenest/credentials/google/client_id';
    protected $path_client_secret='magenest/credentials/google/client_secret';
    protected $oauth2_service_uri= 'https://www.googleapis.com/oauth2/v2';
    protected $oauth2_auth_uri ='https://accounts.google.com/o/oauth2/auth';
    protected $oauth2_token_uri = 'https://accounts.google.com/o/oauth2/token';
    protected $scope = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ];

    public function createAuthUrl()
    {
        $query = [
                'response_type' => 'code',
                'redirect_uri' => $this->getRedirectUri(),
                'client_id' => $this->getClientId(),
                'scope' => implode(' ', $this->getScope()),
                'state' => $this->getState(),
                'access_type' => 'offline',
                'approval_prompt' => 'auto'
        ];
        $url = $this->oauth2_auth_uri . '?' . http_build_query($query);
        return $url;
    }

    protected function fetchAccessToken($code = null)
    {
        $token_array = [
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

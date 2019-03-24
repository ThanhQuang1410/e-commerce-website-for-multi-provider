<?php
namespace Magenest\SocialLogin\Controller\Google;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Google login failed.';

    /**
     * @var string
     */
    protected $_type = 'google';

    /**
     * @var string
     */
    protected $_path = '/userinfo';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Google\Client';

    /**
     * @param $userInfo
     * @return array
     */
    public function getDataNeedSave($userInfo)
    {
        $dataParent = parent::getDataNeedSave($userInfo);

        $data = [
            'email' => $userInfo['email'],
            'firstname' => $userInfo['given_name'],
            'lastname' => $userInfo['family_name'],
        ];

        return array_replace_recursive($dataParent, $data);
    }

    public function getUserInfo($client, $code)
    {
        $userInfo = $client->api($this->_path, $code);
        
        return $userInfo;
    }
}

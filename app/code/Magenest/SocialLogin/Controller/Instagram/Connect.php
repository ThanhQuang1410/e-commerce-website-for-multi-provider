<?php
namespace Magenest\SocialLogin\Controller\Instagram;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Instagram login failed.';

    /**
     * @var string
     */
    protected $_type = 'instagram';

    /**
     * @var string
     */
    protected $_path = '/users/self/?access_token=';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Instagram\Client';

    /**
     * @param $userInfo
     * @return array
     */
    public function getDataNeedSave($userInfo)
    {
        $dataParent = parent::getDataNeedSave($userInfo);

        $data = [
            'email' => $userInfo['email'],
            'firstname' => $userInfo['full_name'],
            'lastname' => $userInfo['full_name'],
        ];

        return array_replace_recursive($dataParent, $data);
    }

    public function getUserInfo($client, $code)
    {
        $userInfo = $client->api($this->_path, $code);

        if (isset($userInfo['data'])) {
            $userInfo = $userInfo['data'];
        }
        
        if (!isset($userInfo['email']) && isset ($userInfo['username'])) {
            $userInfo['email'] = $userInfo['username'] . '@instagram.com';
        }

        return $userInfo;
    }
}

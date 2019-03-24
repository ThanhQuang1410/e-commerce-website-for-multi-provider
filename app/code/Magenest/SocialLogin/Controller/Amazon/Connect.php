<?php
namespace Magenest\SocialLogin\Controller\Amazon;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Amazon login failed.';

    /**
     * @var string
     */
    protected $_type = 'amazon';

    /**
     * @var string
     */
    protected $_path = '/user/profile';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Amazon\Client';

    /**
     * @param $userInfo
     * @return array
     */
    public function getDataNeedSave($userInfo)
    {
        $dataParent = parent::getDataNeedSave($userInfo);
        $name = explode(' ', $userInfo['name'], 2);
        if (count($name) > 1) {
            $firstName = $name[0];
            $lastName = $name[1];
        } else {
            $firstName = $name[0];
            $lastName = $name[0];
        }
        $data = [
            'email' => $userInfo['email'],
            'firstname' => $firstName,
            'lastname' => $lastName,
        ];

        return array_replace_recursive($dataParent, $data);
    }

    public function getUserInfo($client, $code)
    {
        $userInfo = $client->api($this->_path, $code);

        if (isset($userInfo['user_id'])) {
            $userInfo['id'] = $userInfo['user_id'];
        }

        return $userInfo;
    }
    
}

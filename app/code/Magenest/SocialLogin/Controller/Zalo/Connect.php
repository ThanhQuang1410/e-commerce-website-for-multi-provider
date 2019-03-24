<?php
namespace Magenest\SocialLogin\Controller\Zalo;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Zalo login failed.';

    /**
     * @var string
     */
    protected $_type = 'zalo';

    /**
     * @var string
     */
    protected $_path = '/userinfo';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Zalo\Client';

    /**
     * @param $userInfo
     * @return array
     */
    public function getDataNeedSave($userInfo)
    {
        $dataParent = parent::getDataNeedSave($userInfo);

        $data = [
            'email' => $userInfo['email'],
            'firstname' => $userInfo['firstname'],
            'lastname' => $userInfo['lastname'],
        ];

        return array_replace_recursive($dataParent, $data);
    }

    public function getUserInfo($client, $code)
    {
        $userInfo = $client->api($this->_path, $code);
        $name = $userInfo['name'];
        $id = $userInfo['id'];
        $length = count(explode(' ', $name));
        if ($length == 1) {
            $firstname = $lastname = $name;
        } else {
            $name = explode(' ', $name);
            $firstname = $name[0];
            unset($name[0]);
            $lastname = implode(' ',$name);
        }
        $userInfo = [
            'email' => $id . '@zalo.me',
            'firstname' => $firstname,
            'lastname' => $lastname,
            'id' => $id,
            'type' => 'Zalo'
        ];
        return $userInfo;
    }
}

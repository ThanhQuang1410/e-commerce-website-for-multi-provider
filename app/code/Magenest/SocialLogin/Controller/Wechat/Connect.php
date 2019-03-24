<?php
namespace Magenest\SocialLogin\Controller\Wechat;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Wechat login failed.';

    /**
     * @var string
     */
    protected $_type = 'wechat';

    /**
     * @var string
     */
    protected $_path = '/sns/userinfo';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Wechat\Client';

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
        $name = $userInfo['nickname'];
        $id = $userInfo['openid'];
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
            'email' => $id . '@wechat.me',
            'firstname' => $firstname,
            'lastname' => $lastname,
            'id' => $id,
            'type' => 'wechat'
        ];
        return $userInfo;
    }
}

<?php
namespace Magenest\SocialLogin\Controller\Kakao;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Kakao login failed.';

    /**
     * @var string
     */
    protected $_type = 'kakao';

    /**
     * @var string
     */
    protected $_path = '/v1/user/me';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Kakao\Client';

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
        $name = $userInfo['properties']['nickname'];
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
        if (!isset($userInfo['kaccount_email']) || !$userInfo['kaccount_email']) {
            $userInfo['kaccount_email'] = $id.'@kakao.com';
        }
        $userInfo = [
            'email' => $userInfo['kaccount_email'],
            'firstname' => $firstname,
            'lastname' => $lastname,
            'id' => $userInfo['access_token'],
            'type' => 'Kakao'
        ];
        return $userInfo;
    }
}

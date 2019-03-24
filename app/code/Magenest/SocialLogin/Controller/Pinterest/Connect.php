<?php
namespace Magenest\SocialLogin\Controller\Pinterest;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Pinterest login failed.';

    /**
     * @var string
     */
    protected $_type = 'pinterest';

    /**
     * @var string
     */
    protected $_path = '/me';


    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Pinterest\Client';

    /**
     * @param $userInfo
     * @return array
     */
    public function getDataNeedSave($userInfo)
    {
        $dataParent = parent::getDataNeedSave($userInfo);

        $data = [
            'email' => $userInfo['email'],
            'firstname' => $userInfo['first_name'],
            'lastname' => $userInfo['last_name'],
        ];

        return array_replace_recursive($dataParent, $data);
    }

    public function getUserInfo($client, $code)
    {
        $userInfo = $client->api($this->_path, $code);

        if (isset($userInfo['data'])) {
            $userInfo = $userInfo['data'];
        }

        if (!isset($userInfo['email']) && isset($userInfo['url'])) {
            $userInfo['email'] = substr($userInfo['url'], 26, -1) . '@pinterest.com';
        }

        return $userInfo;
    }
}

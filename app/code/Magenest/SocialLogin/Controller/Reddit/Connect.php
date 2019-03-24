<?php
namespace Magenest\SocialLogin\Controller\Reddit;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Reddit login failed.';

    /**
     * @var string
     */
    protected $_type = 'reddit';

    /**
     * @var string
     */
    protected $_path = '/me';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Reddit\Client';

    /**
     * @param $userInfo
     * @return array
     */
    public function getDataNeedSave($userInfo)
    {
        $dataParent = parent::getDataNeedSave($userInfo);

        $data = [
            'email' => $userInfo['email'],
            'firstname' => $userInfo['name'],
            'lastname' => $userInfo['name'],
        ];

        return array_replace_recursive($dataParent, $data);
    }

    public function getUserInfo($client, $code)
    {
        $userInfo = $client->api($this->_path, $code);

        if (!isset($userInfo['email']) && isset ($userInfo['name'])) {
            $userInfo['email'] = $userInfo['name'] . '@reddit.com';
        }

        return $userInfo;
    }
}

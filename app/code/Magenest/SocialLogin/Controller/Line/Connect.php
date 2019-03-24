<?php
namespace Magenest\SocialLogin\Controller\Line;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Line login failed.';

    /**
     * @var string
     */
    protected $_type = 'line';

    /**
     * @var string
     */
    protected $_path = '/v2/profile';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Line\Client';

    /**
     * @param $userInfo
     * @return array
     */
    public function getDataNeedSave($userInfo)
    {
        $dataParent = parent::getDataNeedSave($userInfo);
        $userName = $userInfo['displayName'];
        $data = [
            'email' => $userInfo['email'],
            'firstname' => $userName,
            'lastname' => $userName,
        ];

        return array_replace_recursive($dataParent, $data);
    }

    public function getUserInfo($client, $code)
    {
        $userInfo = $client->api($this->_path, $code);

        if (isset($userInfo['userId'])) {
            $userInfo['id'] = $userInfo['userId'];
        }

        if (!isset($userInfo['email']) && isset($userInfo['displayName'])) {
            $userInfo['displayName'] = $this->convert_vi_to_en(str_replace(' ', '', $userInfo['displayName']));
            $userInfo['email'] = $userInfo['displayName'] . '@line.me';
        }
        return $userInfo;
    }

    function convert_vi_to_en($str)
    {
        $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
        $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
        $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
        $str = preg_replace("/(đ)/", 'd', $str);
        $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $str);
        $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $str);
        $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $str);
        $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $str);
        $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $str);
        $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $str);
        $str = preg_replace("/(Đ)/", 'D', $str);
        return $str;
    }
}

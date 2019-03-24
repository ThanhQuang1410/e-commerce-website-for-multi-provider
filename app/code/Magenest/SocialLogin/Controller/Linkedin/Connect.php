<?php
namespace Magenest\SocialLogin\Controller\Linkedin;

use Magenest\SocialLogin\Controller\AbstractConnect;

class Connect extends AbstractConnect
{
    /**
     * @var string
     */
    protected $_exeptionMessage = 'Linked in login failed.';

    /**
     * @var string
     */
    protected $_type = 'linkedin';

    /**
     * @var string
     */
    protected $_path = '/userinfo';

    /**
     * @var string
     */
    protected $clientModel = '\Magenest\SocialLogin\Model\Linkedin\Client';

    /**
     *
     */
    public function connect()
    {
        $errorCode = $this->getRequest()->getParam('error');
        $code = $this->getRequest()->getParam('code');
        $linkedIn = 'linkedin';

        if ($errorCode) {
            return;
        }

        if ($code) {
            $client = $this->_objectManager->create($this->clientModel);
            $userInfoApi = array(
                'id',
                'first-name',
                'last-name',
                'headline',
                'picture-url',
                'email-address',
                'phone-numbers',
                'location'
            );
            $userInfo = $client->api('/people/~:(' . implode(',', $userInfoApi) . ')?format=json', $code);
            $client->getAccessToken();
            /** Find a customer with Linkedin Id */
            $customer = $this->_helper->getCustomers($userInfo['id'], $linkedIn);
            if ($customer->getId()) {
                $this->_customerSession->setCustomerAsLoggedIn($customer);
                return;
            }
            /** Find a customer with Linkedin Email */
            $customer = $this->_helper->getCustomerByEmail($userInfo['emailAddress']);
            if ($customer->getId()) {
                $data = [
                    'magenest_sociallogin_id' => $userInfo['id'],
                    'magenest_sociallogin_type' => $linkedIn
                ];
                $this->_helper->login($customer, $data);
                return;
            }
            /**
             * If don't exist customer, create new customer with this information
             *
             */
            $data = [
                'email' => $userInfo['emailAddress'],
                'firstname' => $userInfo['firstName'],
                'lastname' => $userInfo['lastName'],
                'sendemail' => 0,
                'confirmation' => 0,
                'magenest_sociallogin_id' => $userInfo['id'],
                'magenest_sociallogin_type' => $linkedIn
            ];
            $this->_helper->creatingAccount($data);

            return;
        }
    }

    /**
     * @param $userInfo
     * @return array
     */
    public function getDataNeedSave($userInfo)
    {
        $dataParent = parent::getDataNeedSave($userInfo);

        $data = [
            'email' => $userInfo['email'],
            'firstname' => $userInfo['firstName'],
            'lastname' => $userInfo['lastName'],
        ];

        return array_replace_recursive($dataParent, $data);
    }
}

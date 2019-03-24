<?php

namespace Magenest\SocialLogin\Helper;

use Magento\Customer\Model\Customer;
use Magento\Customer\Model\CustomerFactory;
use Magento\Customer\Model\SessionFactory;
use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Framework\App\Helper\Context;
use Magento\Store\Model\StoreManagerInterface;
use Magento\Config\Model\Config;
use Magento\Backend\App\ConfigInterface;

class SocialLogin extends AbstractHelper
{
    protected $_CreateAccountPathXML = 'magenest/general/enabled_social_enabled_create_account';

    protected $_ModalPathXML = 'magenest/general/enabled_social_enabled_modal';

    protected $_CheckoutPathXML = 'magenest/general/enabled_social_enabled_checkout';


    /**
     * @var SessionFactory
     */
    protected $_customerSession;
    /**
     * @var CustomerFactory
     */
    protected $_customerFactory;

    /**
     * @var StoreManagerInterface
     */
    protected $_storeManager;
    /**
     * @var ButtonConfig
     */
    protected $_buttonconfig;
    /**
     * @var Config
     */
    protected $_config;

    /**
     * SocialLogin constructor.
     * @param SessionFactory $customerSession
     * @param CustomerFactory $customerFactory
     * @param StoreManagerInterface $storeManager
     * @param Config $buttonconfig
     * @param ConfigInterface $config
     * @param Context $context
     */

    public function __construct(
        SessionFactory $customerSession,
        CustomerFactory $customerFactory,
        StoreManagerInterface $storeManager,
        Config $buttonconfig,
        ConfigInterface $config,
        Context $context
    )
    {
        $this->_buttonconfig    = $buttonconfig;
        $this->_config          = $config;
        $this->_customerSession = $customerSession->create();
        $this->_customerFactory = $customerFactory;
        $this->_storeManager    = $storeManager;
        parent::__construct($context);
    }

    /**
     * Login and save with customer email
     *
     * @param \Magento\Customer\Model\Customer $customer
     * @param array $data
     */
    public function login($customer, $data)
    {
        $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
        $resource = $objectManager->get('\Magento\Framework\App\ResourceConnection');
        $connection = $resource->getConnection();
        $sql = $connection->select()
            ->where('attribute_code = ?', 'telephone')
            ->where('frontend_label = ?','Telephone')
            ->from('eav_attribute');

        $data = $connection->fetchRow($sql);
        $isRequired = $data['is_required'];

        $where = ['attribute_code = ?' => 'telephone'];
        $bind = ['is_required' => 0];
        $connection->update('eav_attribute',$bind, $where);

        $data = array_replace_recursive($customer->getData(), $data);
        $customer->addData($data);
        $customer->save();

        $where = ['attribute_code = ?' => 'telephone'];
        $bind = ['is_required' => (int)$isRequired];
        $connection->update('eav_attribute',$bind, $where);

        $this->_customerSession->setCustomerAsLoggedIn($customer);
    }

    /**
     * Create new Customer
     *
     * @param array $data
     */
    public function creatingAccount($data)
    {
        $customer = $this->_customerFactory->create();
        $customer->setData($data);
        $customer->save();
        $this->_customerSession->setCustomerAsLoggedIn($customer);
    }

    /**
     * Get Customer by an attribute
     *
     * @param $id
     * @param $type
     * @return \Magento\Customer\Model\Customer
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function getCustomers($id, $type)
    {
        $customer = $this->_customerFactory->create()
            ->getResourceCollection()
            ->addAttributeToSelect('*')
            ->addAttributeToFilter('magenest_sociallogin_id', $id)
            ->addAttributeToFilter('magenest_sociallogin_type', $type)
            ->getFirstItem();
        return $customer;
    }

    /**
     * Get Customer By Email
     *
     * @param $email
     * @return \Magento\Customer\Model\Customer
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function getCustomerByEmail($email)
    {
        $websiteId = $this->_storeManager->getWebsite()->getId();
        $customer  = $this->_customerFactory->create()->setWebsiteId($websiteId)->loadByEmail($email);
        return $customer;
    }

    /**
     * @return Bool
     */
    public function isLoggedIn()
    {
        return $this->_customerSession->isLoggedIn();
    }


    /**
     * @return Bool
     */
    public function isButtonEnabledCreateAccount()
    {
        return (bool)$this->_config->getValue($this->_CreateAccountPathXML);
    }

    /**
     * @return Bool
     */
    public function isButtonEnabledCheckout()
    {
        return (bool)$this->_config->getValue($this->_CheckoutPathXML);
    }

    /**
     * @return Bool
     */
    public function isButtonEnabledModal()
    {
        return (bool)$this->_config->getValue($this->_ModalPathXML);
    }

    /**
     * @param $email
     * @return String
     */
    public function getTypeByEmail($email)
    {
        $customer = $this->getCustomerByEmail($email);
        return $customer['magenest_sociallogin_type'];
    }
}

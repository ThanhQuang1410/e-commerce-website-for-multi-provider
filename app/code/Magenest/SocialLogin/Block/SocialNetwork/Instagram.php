<?php
namespace Magenest\SocialLogin\Block\SocialNetwork;

use Magenest\SocialLogin\Model\Instagram\Client;
use Magento\Customer\Model\Session;
use Magento\Framework\View\Element\Template;
use Magento\Framework\View\Element\Template\Context;

class Instagram extends Template
{
    /**
     * @var Client
     */
    protected $_clientInstagram;

    /**
     * @var Session
     */
    protected $_customerSession;

    /**
     * @param Client $clientInstagram
     * @param Session $customerSession
     * @param Context $context
     * @param array $data
     */
    public function __construct(
        Client $clientInstagram,
        Session $customerSession,
        Context $context,
        array $data = array()
    ) {
    
        $this->_clientInstagram = $clientInstagram;
        $this->_customerSession = $customerSession;
        parent::__construct($context, $data);
    }
    /**
     * @return parent::_construct
     */
    protected function _construct()
    {
        parent::_construct();
    }
    /**
     * @return string
     */
    public function getButtonUrl()
    {
        return $this->_clientInstagram->createAuthUrl();
    }
    /**
     * @return Bool
     */
    public function isInstagramEnabled()
    {
        return $this->_clientInstagram->isEnabled();
    }
}

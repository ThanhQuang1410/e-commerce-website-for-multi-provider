<?php
namespace Magenest\SocialLogin\Block\SocialNetwork;

use Magenest\SocialLogin\Model\Viber\Client;
use Magento\Customer\Model\Session;
use Magento\Framework\View\Element\Template;
use Magento\Framework\View\Element\Template\Context;

class Viber extends Template
{
    /**
     * @var Client
     */
    protected $_clientViber;

    /**
     * @var Session
     */
    protected $_customerSession;

    /**
     * Viber constructor.
     * @param Client $clientViber
     * @param Session $customerSession
     * @param Context $context
     * @param array $data
     */
    public function __construct(
        Client $clientViber,
        Session $customerSession,
        Context $context,
        array $data = array()
    ) {

        $this->_clientViber = $clientViber;
        $this->_customerSession = $customerSession;
        parent::__construct($context, $data);
    }

    /**
     * @return string
     */
    public function getButtonUrl()
    {
        return $this->_clientViber->createAuthUrl();
    }
    /**
     * @return Bool
     */
    public function isViberEnabled()
    {
        return $this->_clientViber->isEnabled();
    }

    public function getToken()
    {
        return $this->_clientViber->getClientId();
    }
}

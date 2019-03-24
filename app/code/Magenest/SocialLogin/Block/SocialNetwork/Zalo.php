<?php
namespace Magenest\SocialLogin\Block\SocialNetwork;

use Magenest\SocialLogin\Model\Zalo\Client;
use Magento\Customer\Model\Session;
use Magento\Framework\View\Element\Template;
use Magento\Framework\View\Element\Template\Context;

class Zalo extends Template
{
    /**
     * @var Client
     */
    protected $_clientZalo;

    /**
     * @var Session
     */
    protected $_customerSession;

    /**
     * Zalo constructor.
     * @param Client $clientZalo
     * @param Session $customerSession
     * @param Context $context
     * @param array $data
     */
    public function __construct(
        Client $clientZalo,
        Session $customerSession,
        Context $context,
        array $data = array()
    ) {

        $this->_clientZalo = $clientZalo;
        $this->_customerSession = $customerSession;
        parent::__construct($context, $data);
    }

    /**
     * @return string
     */
    public function getButtonUrl()
    {
        return $this->_clientZalo->createAuthUrl();
    }
    /**
     * @return Bool
     */
    public function isZaloEnabled()
    {
        return $this->_clientZalo->isEnabled();
    }

}

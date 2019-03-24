<?php
namespace Magenest\SocialLogin\Block\SocialNetwork;

use Magenest\SocialLogin\Model\Wechat\Client;
use Magento\Customer\Model\Session;
use Magento\Framework\View\Element\Template;
use Magento\Framework\View\Element\Template\Context;

class Wechat extends Template
{
    /**
     * @var Client
     */
    protected $_clientWechat;

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

        $this->_clientWechat = $clientZalo;
        $this->_customerSession = $customerSession;
        parent::__construct($context, $data);
    }

    /**
     * @return string
     */
    public function getButtonUrl()
    {
        return $this->_clientWechat->createAuthUrl();
    }
    /**
     * @return Bool
     */
    public function isWechatEnabled()
    {
        return $this->_clientWechat->isEnabled();
    }

}

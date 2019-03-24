<?php
namespace Magenest\SocialLogin\Block\SocialNetwork;

class Google extends \Magento\Framework\View\Element\Template
{
    /**
     * @var \Magenest\SocialLogin\Model\Google\Client
     */
    protected $_clientGoogle;

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Magenest\SocialLogin\Model\Google\Client $clientGoogle
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magenest\SocialLogin\Model\Google\Client $clientGoogle
    ) {
        $this->_clientGoogle = $clientGoogle;
        parent::__construct($context);
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
        return $this->_clientGoogle->createAuthUrl();
    }

    /**
     * @return bool
     */
    public function isGoogleEnabled()
    {
        return $this->_clientGoogle->isEnabled();
    }
}

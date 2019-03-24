<?php
namespace Magenest\SocialLogin\Block\SocialNetwork;

class Amazon extends \Magento\Framework\View\Element\Template
{
    /**
     * @var \Magenest\SocialLogin\Model\Google\Client
     */
    protected $_clientAmazon;

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Magenest\SocialLogin\Model\Amazon\Client $clientAmazon
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magenest\SocialLogin\Model\Amazon\Client $clientAmazon
    ) {
        $this->_clientAmazon = $clientAmazon;
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
        return $this->_clientAmazon->createAuthUrl();
    }

    /**
     * @return bool
     */
    public function isAmazonEnabled()
    {
        return $this->_clientAmazon->isEnabled();
    }
}

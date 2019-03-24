<?php
namespace Magenest\SocialLogin\Block\SocialNetwork;

class Line extends \Magento\Framework\View\Element\Template
{
    /**
     * @var \Magenest\SocialLogin\Model\Google\Client
     */
    protected $_clientLine;

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Magenest\SocialLogin\Model\Line\Client $clientLine
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magenest\SocialLogin\Model\Line\Client $clientLine
    ) {
        $this->_clientLine = $clientLine;
        parent::__construct($context);
    }

    /**
     *
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
        return $this->_clientLine->createAuthUrl();
    }

    /**
     * @return bool
     */
    public function isLineEnabled()
    {
        return $this->_clientLine->isEnabled();
    }
}

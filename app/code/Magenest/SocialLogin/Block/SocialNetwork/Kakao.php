<?php
namespace Magenest\SocialLogin\Block\SocialNetwork;

use Magenest\SocialLogin\Model\Kakao\Client;
use Magento\Customer\Model\Session;
use Magento\Framework\View\Element\Template;
use Magento\Framework\View\Element\Template\Context;

class Kakao extends Template
{
    /**
     * @var Client
     */
    protected $_clientKakao;

    /**
     * @var Session
     */
    protected $_customerSession;

    /**
     * Kakao constructor.
     * @param Client $clientKakao
     * @param Session $customerSession
     * @param Context $context
     * @param array $data
     */
    public function __construct(
        Client $clientKakao,
        Session $customerSession,
        Context $context,
        array $data = array()
    ) {

        $this->_clientKakao = $clientKakao;
        $this->_customerSession = $customerSession;
        parent::__construct($context, $data);
    }

    /**
     * @return string
     */
    public function getButtonUrl()
    {
        return $this->_clientKakao->createAuthUrl();
    }
    /**
     * @return Bool
     */
    public function isKakaoEnabled()
    {
        return $this->_clientKakao->isEnabled();
    }
}

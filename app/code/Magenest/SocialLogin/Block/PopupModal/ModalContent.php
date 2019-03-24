<?php

namespace Magenest\SocialLogin\Block\PopupModal;

use Magento\Framework\View\Element\Template;

class ModalContent extends Template
{
    /**
     * @var array|\Magento\Checkout\Block\Checkout\LayoutProcessorInterface[]
     */
    protected $layoutProcessors;
    /**
     * @var \Magenest\SocialLogin\Model\Twitter\Client
     */
    protected $_clientTwitter;
    /**
     * @var \Magenest\SocialLogin\Model\Facebook\Client
     */
    protected $_clientFacebook;
    /**
     * @var \Magenest\SocialLogin\Model\Google\Client
     */
    protected $_clientGoogle;
    /**
     * @var \Magenest\SocialLogin\Model\Amazon\Client
     */
    protected $_clientAmazon;
    /**
     * @var \Magenest\SocialLogin\Model\Instagram\Client
     */
    protected $_clientInstagram;
    /**
     * @var \Magenest\SocialLogin\Model\Reddit\Client
     */
    protected $_clientReddit;
    /**
     * @var \Magenest\SocialLogin\Model\Line\Client
     */
    protected $_clientLine;
    /**
     * @var \Magenest\SocialLogin\Model\Pinterest\Client
     */
    protected $_clientPinterest;
    /**
     * @var \Magenest\SocialLogin\Model\Linkedin\Client
     */
    protected $_clientLinkedIn;
    /**
     * @var \Magenest\SocialLogin\Helper\SocialLogin
     */
    protected $_sociallogin;

    public function __construct(
        Template\Context $context,
        \Magenest\SocialLogin\Model\Twitter\Client $clientTwitter,
        \Magenest\SocialLogin\Model\Facebook\Client $clientFacebook,
        \Magenest\SocialLogin\Model\Google\Client $clientGoogle,
        \Magenest\SocialLogin\Model\Amazon\Client $clientAmazon,
        \Magenest\SocialLogin\Model\Instagram\Client $clientInstagram,
        \Magenest\SocialLogin\Model\Reddit\Client $clientReddit,
        \Magenest\SocialLogin\Model\Line\Client $clientLine,
        \Magenest\SocialLogin\Model\Pinterest\Client $clientPinterest,
        \Magenest\SocialLogin\Model\Linkedin\Client $clientLinkedIn,
        \Magenest\SocialLogin\Helper\SocialLogin $socialLogin,
        array $layoutProcessors = [],
        array $data = []
    )
    {
        parent::__construct($context, $data);
        $this->jsLayout         = isset($data['jsLayout']) && is_array($data['jsLayout']) ? $data['jsLayout'] : [];
        $this->layoutProcessors = $layoutProcessors;
        $this->_clientTwitter   = $clientTwitter;
        $this->_clientFacebook  = $clientFacebook;
        $this->_clientGoogle    = $clientGoogle;
        $this->_clientAmazon    = $clientAmazon;
        $this->_clientInstagram = $clientInstagram;
        $this->_clientLine      = $clientLine;
        $this->_clientLinkedIn  = $clientLinkedIn;
        $this->_clientPinterest = $clientPinterest;
        $this->_clientReddit    = $clientReddit;
        $this->_sociallogin     = $socialLogin;

    }

    public function getJsLayout()
    {
        foreach ($this->layoutProcessors as $processor) {
            $this->jsLayout = $processor->process($this->jsLayout);
        }
        return \Zend_Json::encode($this->jsLayout);
    }

    public function getConfig()
    {
        return [
            'baseUrl'                  => $this->getBaseUrl(),
            'isButtonEnabledCheckout'  => $this->isButtonEnabledCheckout(),
            'isEnabledPopup'           => $this->isEnabledPopup(),
            'isEnabledInCreateAccount' => $this->isEnabledInCreateAccount(),
            'TwitterUrl'               => $this->getTwitterUrl(),
            'isTwitterEnabled'         => $this->isTwitterEnabled(),
            'FacebookUrl'              => $this->getFacebookUrl(),
            'isFacebookEnabled'        => $this->isFacebookEnabled(),
            'GoogleUrl'                => $this->getGoogleUrl(),
            'isGoogleEnabled'          => $this->isGoogleEnabled(),
            'AmazonUrl'                => $this->getAmazonUrl(),
            'isAmazonEnabled'          => $this->isAmazonEnabled(),
            'InstagramUrl'             => $this->getInstagramUrl(),
            'isInstagramEnabled'       => $this->isInstagramEnabled(),
            'LineUrl'                  => $this->getLineUrl(),
            'isLineEnabled'            => $this->isLineEnabled(),
            'PinterestUrl'             => $this->getPinterestUrl(),
            'isPinterestEnabled'       => $this->isPinterestEnabled(),
            'RedditUrl'                => $this->getRedditUrl(),
            'isRedditEnabled'          => $this->isRedditEnabled(),
            'LinkedInUrl'              => $this->getLinkedInUrl(),
            'isLinkedInEnabled'        => $this->isLinkedInEnabled(),
        ];
    }

    public function getFacebookUrl()
    {
        return $this->_clientFacebook->createAuthUrl();
    }

    public function getTwitterUrl()
    {
        return $this->_clientTwitter->createAuthUrl();
    }

    public function getGoogleUrl()
    {
        return $this->_clientGoogle->createAuthUrl();
    }

    public function getAmazonUrl()
    {
        return $this->_clientAmazon->createAuthUrl();
    }

    public function getLinkedInUrl()
    {
        return $this->_clientLinkedIn->createAuthUrl();
    }

    public function getInstagramUrl()
    {
        return $this->_clientInstagram->createAuthUrl();
    }

    public function getRedditUrl()
    {
        return $this->_clientReddit->createAuthUrl();
    }

    public function getPinterestUrl()
    {
        return $this->_clientPinterest->createAuthUrl();
    }

    public function getLineUrl()
    {
        return $this->_clientLine->createAuthUrl();
    }

    public function isLinkedInEnabled()
    {
        return $this->_clientLinkedIn->isEnabled();
    }

    public function isInstagramEnabled()
    {
        return $this->_clientInstagram->isEnabled();
    }

    public function isRedditEnabled()
    {
        return $this->_clientReddit->isEnabled();
    }

    public function isPinterestEnabled()
    {
        return $this->_clientPinterest->isEnabled();
    }

    public function isLineEnabled()
    {
        return $this->_clientLine->isEnabled();
    }

    public function isTwitterEnabled()
    {
        return $this->_clientTwitter->isEnabled();
    }

    public function isFacebookEnabled()
    {
        return $this->_clientFacebook->isEnabled();
    }

    public function isGoogleEnabled()
    {
        return $this->_clientGoogle->isEnabled();
    }

    public function isAmazonEnabled()
    {
        return $this->_clientAmazon->isEnabled();
    }

    public function isButtonEnabledCheckout()
    {
        return $this->_sociallogin->isButtonEnabledCheckout();
    }

    public function isEnabledPopup()
    {
        return $this->_sociallogin->isButtonEnabledModal();
    }

    public function isEnabledInCreateAccount()
    {
        return $this->_sociallogin->isButtonEnabledCreateAccount();
    }
}

<?php

namespace Magenest\SocialLogin\Model\Config;

use Magento\Backend\App\ConfigInterface;
use Magento\Backend\Block\Template\Context;
use Magenest\SocialLogin\Model\Twitter\Client as clientTwitter;
use Magenest\SocialLogin\Model\Facebook\Client as clientFacebook;
use Magenest\SocialLogin\Model\Google\Client as clientGoogle;
use Magenest\SocialLogin\Model\Amazon\Client as clientAmazon;
use Magenest\SocialLogin\Model\Line\Client as clientLine;
use Magenest\SocialLogin\Model\Pinterest\Client as clientPinterest;
use Magenest\SocialLogin\Model\Reddit\Client as clientReddit;
use Magenest\SocialLogin\Model\Linkedin\Client as clientLinkedIn;
use Magenest\SocialLogin\Model\Instagram\Client as clientInstagram;
use Magenest\SocialLogin\Model\Zalo\Client as clientZalo;
use Magenest\SocialLogin\Model\Kakao\Client as clientKakao;
use Magenest\SocialLogin\Model\Wechat\Client as clientWechat;
use Magenest\SocialLogin\Model\Viber\Client as clientViber;

class Config extends \Magento\Config\Block\System\Config\Form\Field
{
    /**
     * @var ConfigInterface
     */
    protected $_config;
    /**
     * @var clientTwitter
     */
    protected $clientTwitter;
    /**
     * @var clientFacebook
     */
    protected $clientFacebook;
    /**
     * @var clientGoogle
     */
    protected $clientGoogle;
    /**
     * @var clientAmazon
     */
    protected $clientAmazon;
    /**
     * @var clientLine
     */
    protected $clientLine;
    /**
     * @var clientReddit
     */
    protected $clientReddit;
    /**
     * @var clientPinterest
     */
    protected $clientPinterest;
    /**
     * @var clientInstagram
     */
    protected $clientInstagram;
    /**
     * @var clientLinkedIn
     */
    protected $clientLinkedIn;
    /**
     * @var clientZalo
     */
    protected $clientZalo;

    /**
     * @var clientKakao
     */
    protected $clientKakao;


    protected $clientWechat;

    protected $clientViber;

    /**
     * Config constructor.
     * @param Context $context
     * @param ConfigInterface $config
     * @param clientTwitter $clientTwitter
     * @param clientFacebook $clientFacebook
     * @param clientGoogle $clientGoogle
     * @param clientAmazon $clientAmazon
     * @param clientPinterest $clientPinterest
     * @param clientInstagram $clientInstagram
     * @param clientLine $clientLine
     * @param clientReddit $clientReddit
     * @param clientLinkedIn $clientLinkedIn
     * @param clientZalo $clientZalo
     * @param clientKakao $clientKakao
     * @param clientViber $clientViber
     * @param array $data
     */
    public function __construct(
        Context $context,
        ConfigInterface $config,
        clientTwitter $clientTwitter,
        clientFacebook $clientFacebook,
        clientGoogle $clientGoogle,
        clientAmazon $clientAmazon,
        clientPinterest $clientPinterest,
        clientInstagram $clientInstagram,
        clientLine $clientLine,
        clientReddit $clientReddit,
        clientLinkedIn $clientLinkedIn,
        clientZalo $clientZalo,
        clientKakao $clientKakao,
        clientWechat $clientWechat,
        clientViber $clientViber,
        array $data = array()
    )
    {
        $this->_config = $config;
        $this->clientTwitter = $clientTwitter;
        $this->clientFacebook = $clientFacebook;
        $this->clientGoogle = $clientGoogle;
        $this->clientAmazon = $clientAmazon;
        $this->clientInstagram = $clientInstagram;
        $this->clientLine = $clientLine;
        $this->clientLinkedIn = $clientLinkedIn;
        $this->clientPinterest = $clientPinterest;
        $this->clientReddit = $clientReddit;
        $this->clientZalo = $clientZalo;
        $this->clientKakao = $clientKakao;
        $this->clientWechat = $clientWechat;
        $this->clientViber = $clientViber;
        parent::__construct($context, $data);
    }

    /**
     * create element for Access token field in store configuration
     * @param \Magento\Framework\Data\Form\Element\AbstractElement $element
     * @return string
     */
    protected function _renderValue(\Magento\Framework\Data\Form\Element\AbstractElement $element)
    {
        $id = $element->getId();
        $copy = "var copyText = this;copyText.select();document.execCommand('copy');alert('Copied the Redirect Uri: ' + copyText.value);";
        switch ($id) {
            case 'magenest_credentials_twitter_redirect_uri' :
                $url = $this->clientTwitter->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://apps.twitter.com/app/new" target="_blank">Click here to navigate to go to Twitter\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_facebook_redirect_uri' :
                $url = $this->clientFacebook->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://developers.facebook.com/apps" target="_blank">Click here to navigate to Facebook\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_google_redirect_uri' :
                $url = $this->clientGoogle->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://console.developers.google.com/projectselector/apis/library" target="_blank">Click here to navigate to Google\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_amazon_redirect_uri' :
                $url = $this->clientAmazon->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://sellercentral.amazon.com/gp/homepage.html" target="_blank">Click here to navigate to Amazon\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_line_redirect_uri' :
                $url = $this->clientLine->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://developers.line.me/ba/" target="_blank">Click here to navigate to Line\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_pinterest_redirect_uri' :
                $url = $this->clientPinterest->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://developers.pinterest.com/apps/" target="_blank">Click here to navigate to Pinterest\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_instagram_redirect_uri' :
                $url = $this->clientInstagram->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://www.instagram.com/developer/clients/register/" target="_blank">Click here to navigate to Instagram\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_reddit_redirect_uri' :
                $url = $this->clientReddit->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://www.reddit.com/prefs/apps" target="_blank">Click here to navigate to Reddit\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_linkedin_redirect_uri' :
                $url = $this->clientLinkedIn->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://www.linkedin.com/developer/apps/new" target="_blank">Click here to navigate to LinkedIn\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_zalo_redirect_uri' :
                $url = $this->clientZalo->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://developers.zalo.me/" target="_blank">Click here to navigate to Zalo\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
            case 'magenest_credentials_kakao_redirect_uri' :
                $url = $this->clientKakao->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://developers.kakao.com/" target="_blank">Click here to navigate to Kakao\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;

            case 'magenest_credentials_viber_redirect_uri' :
                $url = $this->clientKakao->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://partners.viber.com/" target="_blank">Click here to navigate to Viber\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;

            case 'magenest_credentials_wechat_redirect_uri' :
                $url = $this->clientWechat->getRedirectUri();
                $element->setData([
                    'value' => $url,
                    'tooltip' => 'Use this Redirect Uri value when creating your app',
                    'comment' => '<a href="https://open.wechat.com/" target="_blank">Click here to navigate to Wechat\'s app page</a>',
                    'onclick' => $copy,
                ]);
                break;
        }
        return parent::_renderValue($element);
    }
}

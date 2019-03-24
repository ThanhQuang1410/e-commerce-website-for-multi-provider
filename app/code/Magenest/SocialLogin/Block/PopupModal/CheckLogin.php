<?php
namespace Magenest\SocialLogin\Block\PopupModal;

use Magento\Framework\View\Element\Template;
class CheckLogin extends Template{

    /**
     * @var \Magento\Framework\Url
     */
    protected $urlHelper;

    /**
     * @param \Magento\Framework\Url $urlHelper
     * @param \Magento\Framework\View\Element\Template\Context $context
     */
    public function __construct(
    \Magento\Framework\Url $urlHelper,
    \Magento\Framework\View\Element\Template\Context $context
    ){
        $this->urlHelper = $urlHelper;
        parent::__construct($context);

    }
    /**
     * @return Bool
     */
    public function isUserLogin(){

        $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
        $customerSession = $objectManager->create('Magento\Customer\Model\Session');

        if($customerSession->isLoggedIn()) {
            return 1;
        } else {
            return 0;
        }
    }
    /**
     * @return String
     */
    public function getSignInUrl(){
        return $this->urlHelper->getUrl('customer/account/login/');
    }
}
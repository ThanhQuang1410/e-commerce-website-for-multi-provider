<?php
namespace Magenest\SOcialLogin\Plugin\Controller\Account;

use Magento\Customer\Controller\Account\Login;
use Magento\Customer\Model\Session;
use Magento\Framework\App\Action\Context;
use Magento\Framework\View\Result\PageFactory;
use Magento\Framework\Session\SessionManagerInterface;

class CheckLogin extends Login
{
    protected $sessionManager;
    public function __construct(
        Context $context,
        Session $customerSession,
        PageFactory $resultPageFactory,
        SessionManagerInterface $sessionManager
    ){
        $this->sessionManager = $sessionManager;
        parent::__construct($context, $customerSession, $resultPageFactory);
    }

    public function aroundExecute(Login $subject, callable  $proceed)
    {
        $data = $this->sessionManager->getUserData();
        if (isset($data['magenest_sociallogin_id']) && isset($data['magenest_sociallogin_type'])) {
            $resultRedirect = $this->resultRedirectFactory->create();
            $resultRedirect->setPath('sociallogin/info/additional');
            return $resultRedirect;
        } else {
            return $proceed();
        }
    }
}
<?php

namespace Magenest\SocialLogin\Controller\Info;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\View\Result\PageFactory;
use Magento\Framework\App\CacheInterface;
use Magento\Framework\App\Config;
use Magento\Framework\Session\SessionManagerInterface;
class Additional extends Action
{
    protected $_resultPageFactory;

    protected $_cache;

    protected $sessionManager;

    public function __construct(
        Context $context,
        PageFactory $factory,
        CacheInterface $cache,
        SessionManagerInterface $sessionManager
    ){
        $this->_resultPageFactory = $factory;
        $this->_cache = $cache;
        $this->sessionManager = $sessionManager;
        parent::__construct($context);
    }

    public function execute()
    {
        $data = $this->sessionManager->getUserData();
        if (!isset($data['magenest_sociallogin_id']) || !isset($data['magenest_sociallogin_type'])) {
            $resultRedirect = $this->resultRedirectFactory->create();
            $resultRedirect->setPath('customer/account/create');
            return $resultRedirect;
        }
        return $this->_resultPageFactory->create();
    }
}
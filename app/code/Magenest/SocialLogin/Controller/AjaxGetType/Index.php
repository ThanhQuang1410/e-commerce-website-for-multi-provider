<?php
namespace Magenest\SocialLogin\Controller\AjaxGetType;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magenest\SocialLogin\Helper\SocialLogin;
use Magento\Framework\Controller\Result\JsonFactory;
class Index extends Action
{
    /**
     * @var JsonFactory
     */
    protected $_jsonFactory;


    public function __construct(
        JsonFactory $jsonFactory,
        SocialLogin $socialLogin,
        Context $context
    ){
        $this->_jsonFactory = $jsonFactory;
        $this->_helper = $socialLogin;
        parent::__construct($context);
    }

    public function execute()
    {
        if($this->getRequest()->isAjax())
        {
            $resultJson = $this->_jsonFactory->create();
            $email = $this->getRequest()->getParam('email');
            try {
                $type = $this->_helper->getTypeByEmail($email);

            } catch (\Exception $e){
                $arrayReturn = [
                    'error' => 1,
                    'success' => 0
                ];

                return $resultJson->setData($arrayReturn);
            }
            $arrayReturn = [
                'error' => 0,
                'success' => 1,
                'type' => $type
            ];

            return $resultJson->setData($arrayReturn);
        }
        else{
            return false;
        }
        // TODO: Implement execute() method.
    }

}
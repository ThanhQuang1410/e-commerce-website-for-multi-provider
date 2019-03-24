<?php
namespace Magenest\SocialLogin\Controller\Adminhtml\Viber;

use Magento\Backend\App\Action;
use Magento\Framework\Controller\ResultFactory;
use Magento\Framework\App\Config\ScopeConfigInterface;

/**
 * Class Webhook
 * @package Magenest\SocialLogin\Controller\Adminhtml\Viber
 */
class Webhook extends Action
{

    protected $scopeConfig;

    public function __construct(
        Action\Context $context,
        ScopeConfigInterface $scopeConfig
    ){
        $this->scopeConfig = $scopeConfig;
        parent::__construct($context);
    }

    /**
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function execute()
    {
        $url = "https://chatapi.viber.com/pa/set_webhook";
        $data = array(

            'url' => $this->getUrl('sociallogin/viber/webhook'),
            'send_name' => true,
            'send_photo' => true,
        );

        $options = array(
            'http' => array(
                'header'  => "Content-type: application/json\r\n"."X-Viber-Auth-Token: ".$this->scopeConfig->getValue('magenest/credentials/viber/token'),
                'method'  => 'POST',
                'content' => json_encode($data)
            )
        );
        $context  = stream_context_create($options);
        $result = json_decode(file_get_contents($url, false, $context), true);
        if ($result['status'] == "0") {
            $response = ['message' => __('Webhook has been set successfully')->__toString()];
        } else {
            $response = ['message' => __($result['status_message'])->__toString()];
        }
        $resultRedirect = $this->resultFactory->create(ResultFactory::TYPE_JSON);
        $resultRedirect->setData($response);

        return $resultRedirect;
    }

    /**
     * @return bool
     */
    protected function _isAllowed()
    {
        return $this->_authorization->isAllowed('Magenest_SocialLogin::config_sociallogin');
    }
}

<?php
namespace Magenest\SocialLogin\Controller\Twitter;

class Request extends \Magento\Framework\App\Action\Action
{
    /**
     *
     */
    public function execute()
    {
        $client = $this->_objectManager->create('Magenest\SocialLogin\Model\Twitter\Client');
        $client->fetchRequestToken();
    }
}

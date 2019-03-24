<?php
namespace Magenest\SocialLogin\Block;

class Comment extends \Magento\Framework\View\Element\Template
{
    /**
     * @return string
     */
    public function getFacebookAppId()
    {
        return $this->_scopeConfig->getValue('magenest/credentials/facebook/client_id');
    }

    public function enableComment()
    {
        return $this->_scopeConfig->getValue('magenest/general/enabled_social_enabled_comment_product');
    }

    public function getUrlCurrent()
    {
        $url =  $this->_storeManager->getStore()->getCurrentUrl();
        return substr($url,0, strpos($url,".html")+5);
    }
}

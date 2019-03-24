<?php
namespace Magenest\SocialLogin\Model\Share;

use Magento\Backend\App\ConfigInterface;
use Magento\Framework\DataObject;

class Share extends DataObject
{
    const XML_PATH_ENABLED = 'magenest/general/enabled_share';
    const XML_PATH_SOCIALSHARE = 'magenest/general/select_social_share';
    protected $_config;

    public function __construct(
        ConfigInterface $config,
        array $data = array()
    )
    {
        $this->_config = $config;
        parent::__construct($data);
    }

    public function isEnabled()
    {
        return (bool)$this->_isEnabled();
    }

    public function getSocialShare()
    {
        $socialShare = $this->_getStoreConfig(self::XML_PATH_SOCIALSHARE);
        if($socialShare == null){
            return [];
        }
        return array_flip(explode(',', $socialShare));
    }

    protected function _isEnabled()
    {
        return $this->_getStoreConfig(self::XML_PATH_ENABLED);
    }


    protected function _getStoreConfig($xmlPath)
    {
        return $this->_config->getValue($xmlPath);
    }
}

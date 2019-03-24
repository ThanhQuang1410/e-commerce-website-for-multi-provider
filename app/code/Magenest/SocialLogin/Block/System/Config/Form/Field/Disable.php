<?php
namespace Magenest\SocialLogin\Block\System\Config\Form\Field;

use Magento\Framework\Data\Form\Element\AbstractElement;

class Disable extends \Magento\Config\Block\System\Config\Form\Field
{
    protected function _getElementHtml(\Magento\Framework\Data\Form\Element\AbstractElement $element)
    {
        $element->setData([
            'disabled'=>'disabled',
        ]);
        return $element->getElementHtml();
    }
}
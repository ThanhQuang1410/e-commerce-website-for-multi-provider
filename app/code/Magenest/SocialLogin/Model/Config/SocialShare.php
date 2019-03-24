<?php
namespace Magenest\SocialLogin\Model\Config;
class  SocialShare implements \Magento\Framework\Option\ArrayInterface
{
    public function toOptionArray()
    {
        return [
//            [
//                'value' => 'twitter',
//                'label' => __('Twitter'),
//            ],
            [
                'value' => 'facebook',
                'label' => __('Facebook'),
            ],
//            [
//                'value' => 'zalo',
//                'label' => __('Zalo')
//            ],
            [
                'value' => 'google',
                'label' => __('Google+'),
            ],
//            [
//                'value' => 'linkedin',
//                'label' => __('LinkedIn'),
//            ],
//            [
//                'value' => 'pinterest',
//                'label' => __('Pinterest'),
//            ],
//            [
//                'value' => 'reddit',
//                'label' => __('Reddit'),
//            ]
        ];
    }
}
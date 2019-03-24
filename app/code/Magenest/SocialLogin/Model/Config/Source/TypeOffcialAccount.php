<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magenest\SocialLogin\Model\Config\Source;

/**
 * @api
 * @since 100.0.2
 */
class TypeOffcialAccount implements \Magento\Framework\Option\ArrayInterface
{
    /**
     * Options getter
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => 0, 'label' => __('International Official Account')],
            ['value' => 1, 'label' => __('China Official Account')]
        ];
    }

    /**
     * Get options in "key-value" format
     *
     * @return array
     */
    public function toArray()
    {
        return [
            0 => __('International Official Account'),
            1 => __('China Official Account')
        ];
    }
}
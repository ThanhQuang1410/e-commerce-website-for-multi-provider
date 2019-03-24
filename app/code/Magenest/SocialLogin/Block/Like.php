<?php
namespace Magenest\SocialLogin\Block;

use Magento\Catalog\Block\Product\Context;
use Magento\Catalog\Block\Product\AbstractProduct;

class Like extends AbstractProduct
{
    /**
     * @var \Magenest\SocialLogin\Model\Share\Like
     */
    protected $_clientLike;

    /**
     * Like constructor.
     * @param Context $context
     * @param \Magenest\SocialLogin\Model\Share\Like $clientLike
     * @param array $data
     */
    public function __construct(
        Context $context,
        \Magenest\SocialLogin\Model\Share\Like $clientLike,
        array $data = [])
    {
        $this->_clientLike = $clientLike;
        parent::__construct($context, $data);
    }

    /**
     * @return bool
     */
    public function isLikeEnabled()
    {
        return $this->_clientLike->isEnabled();
    }

    public function getSocialLike()
    {
        return $this->_clientLike->getSocialLike();
    }

}

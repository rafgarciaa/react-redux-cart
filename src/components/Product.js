import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  // product heading
  <div>
    <div className="product__right-heading u-margin-bottom-small">
      <h3 className="product__right-heading-title">{title}</h3>
      <span className="product__right-heading-price">&#36;{price}</span>
    </div>
    <div className="product__right-sub-heading">{inventory ? `${inventory} remaining` : `Sold Out`}</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
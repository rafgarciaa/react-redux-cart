import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  // product heading
  <div>
    <div className="product__heading">
      <h3 className="product__heading-title">{title}</h3>
      <span className="product__heading-price">&#36;{price}</span>
    </div>
    <div className="product__sub-heading">{inventory ? `${inventory} remaining` : `Sold Out`}</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
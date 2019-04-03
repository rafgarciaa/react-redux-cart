import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => {
  const imgSrc = `./img/${product.title.toLowerCase()}.png`;

  return (
    <div className="product" style={{ marginBottom: 20 }}>
      <img className='product__img'
        alt='Product-Img'
        src={imgSrc}></img>

      <div className="product__column">
        <Product
          title={product.title}
          price={product.price}
          inventory={product.inventory} />
        <button
          className="btn"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem

import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  // const hasProducts = products.length > 0
  // const nodes = hasProducts ? (
  //   products.map(product =>
  //     <Product
  //       title={product.title}
  //       price={product.price}
  //       quantity={product.quantity}
  //       key={product.id}
  //     />
  //   )
  // ) : (
  //   <em>Please add some products to cart.</em>
  // )

  const cartQty = products.length;
  {/*
  <div className="cart">
    <h3>Your Cart</h3>
    <div>{nodes}</div>
    <p>Total: &#36;{total}</p>
    <button onClick={onCheckoutClicked}
      disabled={hasProducts ? '' : 'disabled'}>
      Checkout
    </button>
  </div>
  */}

  return (
    <div className="cart">
      <i className="fas fa-shopping-cart"></i>
      <h3>Your Cart {cartQty > 0 ? `[${cartQty}]` : `is empty`}</h3>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart

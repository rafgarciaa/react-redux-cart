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
    <div>
      <a href="#cart-modal" className="cart">
        <i className="fas fa-shopping-cart"></i>
        <h3>Your cart {cartQty > 0 ? `[${cartQty}]` : `is empty`}</h3>
      </a>

      <div id="cart-modal" className="cart-modal">
        <div className="cart-modal__content">
          <a href="#root" className="cart-modal__close-button">
            <span className="cart-modal__close-icon cart-modal__close-icon-1">&nbsp;</span>
            <span className="cart-modal__close-icon cart-modal__close-icon-2">&nbsp;</span>
          </a>

          <h3 className="cart-modal__content-heading">Your Cart</h3>
          <img className="cart-modal__content-img" src="./img/cart.png"></img>
          <span className="cart-modal__content-message">Please add some products to your cart.</span>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart

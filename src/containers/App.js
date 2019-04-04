import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../stylesheets/style.css';

const App = () => (
  <div>
    <div className="heading">
      <h2 className="heading__primary">Acme Store</h2>
      <CartContainer />
    </div>
    <ProductsContainer />
  </div>
)

export default App

import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../stylesheets/style.css';

const App = () => (
  <div>
    {/* <h2 className="heading-primary">Acme Store</h2> */}
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App

import React, { Component } from 'react';
import CatalogPage from './CatalogPage';
import products from '../constants/Products';
import { CartProvider } from '../constants/CartContext'

class App extends Component {
  render() {
    return (
      <CartProvider>
        <CatalogPage products = { products }/>
      </CartProvider>
    );
  }
}

export default App;
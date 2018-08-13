import React, { Component } from 'react';
import CatalogPage from './CatalogPage';
import products from '../constants/Products';

class App extends Component {
  render() {
    return (
      <CatalogPage products = { products }/>
    );
  }
}

export default App;
import React, { Component, Fragment } from 'react';
import CatalogPage from './CatalogPage';
import products from '../constants/Products';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <CatalogPage products = { products }/>
      </Fragment>
    );
  }
}

export default App;
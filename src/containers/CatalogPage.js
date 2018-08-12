import React, { Component, Fragment } from 'react';
import Catalog from '../components/Catalog';
import CartTotal from '../components/Cart/CartTotal';

class CatalogPage extends Component {
  render() {
    const { products } = this.props;
    return (
      <Fragment>
        <Catalog products = { products } />
        <CartTotal/>
      </Fragment>
    );
  }
}

export default CatalogPage;
import React, { Component } from 'react';
import Catalog from '../components/Catalog';
import Sidebar from '../components/Sidebar';
import Cart from './Cart';

class CatalogPage extends Component {
  render() {
    const { products } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar>
          <Cart/>
        </Sidebar>
        <Catalog products = { products } />
      </div>
    );
  }
}

export default CatalogPage;
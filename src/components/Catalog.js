import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
  render() {
    const { products } = this.props;

    const children =  products.map(function(item) {
      return (
        <ProductCard
          key={ `ProductCard-${item.id}` }
          {...item}
        />
      )
    })

    return (
      <div style = { productCardWrapperStyle }>
        { children }
      </div>
    );
  }
}

const productCardWrapperStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
};

export default Catalog;
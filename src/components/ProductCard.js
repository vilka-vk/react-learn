import React, { Component } from 'react';
import Image from './ProductCard/Image';
import ItemName from './ProductCard/ItemName';
import Price from './ProductCard/Price';
import AddToCartButton from './ProductCard/AddToCartButton';

class ProductCard extends Component {
  render() {
    const {
      imageUrl,
      title
    } = this.props;

    return (
      <div style = { productCardStyle }>
        <Image
          src = { imageUrl }
          alt = { title }
        />
        <ItemName text = { title } />
        <Price {...this.props} />
        <AddToCartButton/>
      </div>
    );
  }
}

const productCardStyle = {
  width: '250px',
  marginBottom: '20px',
  marginLeft: '10px',
  marginRight: '10px',
  border: '2px solid black',
  textAlign: 'center',
  paddingBottom: '30px',
};

export default ProductCard;
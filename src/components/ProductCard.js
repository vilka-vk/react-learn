import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

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
        <TextBox text = { title } />
        <Price {...this.props} />
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
  cursor: 'pointer',
};

export default ProductCard;
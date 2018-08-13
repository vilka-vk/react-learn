import React, { Component } from 'react';

class AddToCartButton extends Component {
  render() {
    return (
      <div style = {{ marginTop: '25px'}}>
        <button style = {{ cursor: 'pointer' }}>
          Добавить в корзину
        </button>
      </div>
    );
  }
}

export default AddToCartButton;
import React, { Component } from 'react';

class CartTotal extends Component {
  render() {
    const { total } = this.props;

    return (
      <button>В корзине: { total } товаров</button>
    );
  }
}

CartTotal.defaultProps = {
  total: 0
};

export default CartTotal;
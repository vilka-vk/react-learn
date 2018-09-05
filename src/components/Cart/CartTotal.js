import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

CartTotal.propTypes = {
  total: PropTypes.number.isRequired
};

export default CartTotal;
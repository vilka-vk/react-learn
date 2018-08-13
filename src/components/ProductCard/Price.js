import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Price extends Component {
  render() {
    const { price } = this.props;
    return (
      <span>Цена: { price } рублей</span>
    );
  }
}

Price.propTypes = {
  price: PropTypes.number.isRequired
};

export default Price;
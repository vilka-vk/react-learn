import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemName extends Component {
  render() {
    const { text } = this.props;
    return (
      <h4>{ text }</h4>
    );
  }
}

ItemName.propTypes = {
  text: PropTypes.string.isRequired
};

export default ItemName;
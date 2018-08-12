import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { src, alt, width, height } = this.props;
    return (
      <img
        src = { src }
        alt = { alt }
        width = { width }
        height = { height }
      />
    );
  }
}

Image.defaultProps = {
  width: '100%',
  height: '209px'
};

Image.propTypes = {
  src: PropTypes.any.isRequired
};

export default Image;
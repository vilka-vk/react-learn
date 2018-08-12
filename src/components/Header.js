import React, { Component } from 'react';
import CartTotal from './Cart/CartTotal';

class Header extends Component {
  render() {
    return (
      <div style = { header }>
        <CartTotal/>
      </div>
    );
  }
}

const header = {
  display: 'flex',
  flexFlow: 'row-reverse nowrap',
  height: '60px',
  padding: '10px 0 18px',
  boxSizing: 'border-box',

};

export default Header;
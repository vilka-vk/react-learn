import React, { Component } from 'react';
import CartTotal from '../components/Cart/CartTotal';


class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div>
        <CartTotal/>
      </div>
    );
  }
}

export default Cart;
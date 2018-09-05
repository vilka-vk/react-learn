import React, { createContext, Component } from 'react';

export const CartContext = createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  render() {
    const { items } = this.state;
    const { children } = this.props;
    return(
      <CartContext.Provider value = { items }>
        { children }
      </CartContext.Provider>
    )
  }
}
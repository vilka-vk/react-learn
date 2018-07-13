import React, { Component } from "react";

import { deduct } from "./module";

class Hello extends Component {
  render() {
    return (
      <div>Hello, World! I'm Violetta. I'm { deduct.plus(18, 10) } year old.</div>
    )
  }
}

export default Hello;

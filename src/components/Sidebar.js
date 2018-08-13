import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ display: 'flex', flexFlow: 'column nowrap', width: '200px', minWidth: '150px' }}>
        { children }
      </div>
    );
  }
}

export default Sidebar;
import React, { Component } from 'react';

import './app.scss';

class App extends Component {
  render() {
    return <div className="app">{this.props.children}</div>;
  }
}

export default App;

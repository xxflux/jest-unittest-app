import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  makeIncrease = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));

  increase = this.makeIncrease(1);

  render() {
    return (
      <div>
        <h1>Click it, and count it!</h1>
        <h3>Count: {this.state.count}</h3>
        <button className="increase" onClick={this.increase}>Click me to count</button>
      </div>
    )
  }
}

export default App;

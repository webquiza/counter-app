import React, { Component } from "react";
import reactDom from "react-dom";

class Counter extends Component {
  //state includes any data this component needs
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        {/*render data dynamically*/}
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  // check value of count property
  formatCount() {
    //example of using object destructuring
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    //return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;

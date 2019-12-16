import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "../action/indexAction";

class Counter extends Component {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };

  render() {
    // console.log("Store", this.props);
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.decrement}>-</button>
        <span> {this.props.count} </span>
        <button onClick={this.increment}>+</button>
        <br />
        <br />
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

//we need to “connect” the Counter component to Redux at the bottom:
// export default connect(mapStateToProps)(Counter);

export default connect(mapStateToProps)(Counter);

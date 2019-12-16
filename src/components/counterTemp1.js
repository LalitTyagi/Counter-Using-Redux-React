import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement, reset } from "../action/indexAction";

class Counter extends Component {
  render() {
    // console.log("Store", this.props);
    const { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={decrement}>-</button>
        <span> {count} </span>
        <button onClick={increment}>+</button>
        <br />
        <br />
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increment,
      decrement,
      reset
    },
    dispatch
  );
}

Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default Counter;

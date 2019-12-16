import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "../action/indexAction";

const Counter = ({ count, increment, decrement, reset }) => (
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

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

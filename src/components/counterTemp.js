import React, { Component } from "react";
import { connect } from "react-redux";

import { incrementAction, decrementAction, resetAction } from "../action/indexAction";

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

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
  reset: () => dispatch(resetAction())
});

//we need to “connect” the Counter component to Redux at the bottom:
// export default connect(mapStateToProps)(Counter);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

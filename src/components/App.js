import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

class App extends Component {

  render() {
    const props = this.props
    
    return (
      <Fragment>
        <div>Value: { props.value }</div>
        <button onClick={ props.increment }>+ボタン</button>
        <button onClick={ props.decrement }>-ボタン</button>
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement })
export default connect(mapStateToProps, mapDispatchToProps)(App)

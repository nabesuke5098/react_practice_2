import React, { Component, Fragment } from 'react';
// import ReactDOM from 'react-dom';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlus = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinus = () => {
    this.setState({ count: this.state.count -1 })
  }

  render() {
    return (
      <Fragment>
        <div>Counter: { this.state.count }</div>
        <button onClick={ this.handlePlus }>+ボタン</button>
        <button onClick={ this.handleMinus }>-ボタン</button>
      </Fragment>
    )
  }
}

export default App;

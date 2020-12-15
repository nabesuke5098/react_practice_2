import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';

function App() {
  const greet = "HII";

  return (
    <Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log(greet)}} />
      <Test />
      <Test />
    </Fragment>
  );
}

const Test = () => {
  return (
    <div>Mie</div>
  );
}

export default App;

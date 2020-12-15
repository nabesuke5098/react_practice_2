import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';

function App() {
  const greet = "HII";

  return (
    <Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log(greet)}} />
    </Fragment>
  );
}

export default App;

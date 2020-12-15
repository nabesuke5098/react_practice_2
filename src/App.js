import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';

function App() {
  const profiles = [
    { name: "taro", age: 33 },
    { name: "kenta", age: 34 },
    { name: "sora"}
  ];

  return (
    <Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </Fragment>
  );
}

const User = (props) => {
  const { name, age } = props;
  return (
    <div>Hi, { name }. { age } years old.</div>
  );
}

User.defaultProps = {
  age: 1
}

export default App;

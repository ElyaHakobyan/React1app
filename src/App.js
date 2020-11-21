import React, { Fragment } from 'react';
import logo from './logo.svg';
// import './App.css';
// import Demo from './Demo.js'
import Animal from './Classes.jsx'

function Name() {
  return (
    <p>
      John
    </p>
  )
}

export function Surname(props) {
  return (
    <Fragment>
      <p>
        {props.surname}
      </p>
      <p>
        {props.age}
      </p>
    </Fragment>
  )
}

function App() {
  const Greeting = 'Hello'

  return (
    <Fragment>  
      <div className="App">
        {/* {Greeting} */}
        {/* <Demo />
      <img src={logo} /> */}
        {/* <Name />
        <Surname surname='Hakobyan' age='21' /> */}
      </div>

      <div className="App">
        {/* {Greeting} */}
        {/* <Name />
        <Surname /> */}
        {/* <Animal cat='cat' dog='dog' fish='fish'/> */}
      </div>
    </Fragment>
  );
}

export default App;

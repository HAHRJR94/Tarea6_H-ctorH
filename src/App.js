import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './component/Name';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          
        </p>
      <Name />
    </div>
  );
}



export default App;

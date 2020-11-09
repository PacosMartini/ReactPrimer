import React from 'react';
import ReactDOM from "react-dom"
// import logo from './logo.svg';
// import './App.css';

function LandingPage() {
  return (
    <div className="LandingPage" style={{textAlign:`center`}}>
      {/* <header className="LandingPage-header">
        <img src={logo} className="LandingPage-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header> */}

      <h1>Martin Reyes</h1>
      <p>This is a paragraph.</p>
      <ul style={{listStylePosition:`inside`}}>
          <li>Beep</li>
          <li>Boop</li>
      </ul>
    </div>
  );
}

export default LandingPage;
import React from 'react';
import logo from './logo.png';
import './App.css';

import Magic from './components/Magic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          *Search function?*
        </p>
        <Magic />
      </header>
    </div>
  );
}

export default App;

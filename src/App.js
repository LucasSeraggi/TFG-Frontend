import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar'
import Router from './router';

function App() {
  return (
    <div className="App" >
      <MenuBar />
      <Router />
    </div>
  );
}

export default App;

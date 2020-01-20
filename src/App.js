import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Soundcloud from './components/Soundcloud';

class App extends Component {
  render() {
  return (
    <div className="App"
      style={{
        height:"1500px",
        backgroundColor: "black"
      }}    
    >
     <Header/>
     <Featured/>
     <Soundcloud/>
    </div>
  );
  }
}

export default App;

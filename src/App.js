import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import About from './components/About/About.js';
import Featured from './components/featured';
import Soundcloud from './components/Soundcloud';
import Footer from './components/header_footer/Footer';

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
     <Element name="Featured">
        <Featured/>
     </Element>

     <Element name="Soundcloud">
        <Soundcloud/>
     </Element>

     <Element name="About">
        <About/>
     </Element>

     <Footer/>
    </div>
  );
  }
}

export default App;

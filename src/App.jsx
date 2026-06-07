import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Projects from './components/Projects';
import Devlog from './components/Devlog';
import About from './components/About';
import WhatIsSite from './components/WhatIsSite';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Videos />
      <Projects />
      <Devlog />
      <About />
      <WhatIsSite />
      <Footer />
    </div>
  );
}

export default App;

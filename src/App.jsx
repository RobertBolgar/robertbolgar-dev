import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Projects from './components/Projects';
import Devlog from './components/Devlog';
import About from './components/About';
import WhatIsSite from './components/WhatIsSite';
import Footer from './components/Footer';
import PromptsPage from './components/PromptsPage';
import './App.css';

function App() {
  const pathname = window.location.pathname;

  if (pathname === '/prompts' || pathname === '/prompts/') {
    return (
      <div className="app">
        <PromptsPage />
      </div>
    );
  }

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

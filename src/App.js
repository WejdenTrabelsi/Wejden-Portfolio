import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
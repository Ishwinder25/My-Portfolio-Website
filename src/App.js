import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';

import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
   <Router> 
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
   </Router>

  );
}

export default App;

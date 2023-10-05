import './App.css';
import React from 'react';
import Home from './Components/Home';
import Contect from './Components/Contect';
import About from './Components/About';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='nav'>
        <Link className='home' to="/">Home</Link>
        <Link className='about' to="/about">About</Link>
        <Link className='Contect' to="/Contect">Contect</Link>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contect" element={<Contect />} />
      </Routes>
    </Router>


  );
}

export default App;



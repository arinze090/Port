import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import ScrollButton from './components/ScrollToTop/ScrollButton';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollButton />
    </Router>
  );
}

export default App;

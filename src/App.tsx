import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Hero from './components/Hero';
import Logo from './components/Logo';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <Hero />
      <Logo />
      <Content />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;

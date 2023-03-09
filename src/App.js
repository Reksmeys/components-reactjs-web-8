import logo from './logo.svg';
import './App.css';
import './style.css';
import Table from './components/Table';
import { Container, Navbar } from 'react-bootstrap';
import Navbars from './components/Navbar';
import Banner  from './components/Banner';
import Footer from './components/Footer';
import Cards from './components/Cards';
import LoadingView from './components/LoadingView';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Read from './pages/Read';
import NotFound from './pages/404';
import About from './pages/About';
import CreateProduct from './pages/CreateProduct';

function App() {

  return (
    <>
    <Navbars />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/read/:id' element={<Read />} />
              <Route path='/about' element={<About />} />
              <Route path='/create' element={<CreateProduct />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </>
  );
}

export default App;

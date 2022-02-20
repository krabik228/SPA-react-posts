import React from 'react';
import './Styles/App.css'
import { Navigate, BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />

    </BrowserRouter>
  )
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import SignUp from "./SignUp";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <SignUp />
      </div>
    </BrowserRouter>);
}

export default App;
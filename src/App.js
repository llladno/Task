
import './App.css';
import React from 'react';
import Bar from './components/Bar';
import CardInfo from './components/CardInfo';
import CardPlace from './components/CardPlace';
import Home from './components/Home';
import Navbar from './components/Navbar';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path='/element/:title1/:title2/:oldPrice/:newPrice/:id' element={<CardInfo></CardInfo>}></Route>
      </Routes>
    </div>
  );
}

export default App;

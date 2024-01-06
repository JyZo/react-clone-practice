import { Routes,Route } from "react-router-dom";
import React from 'react';
import Home from './Home';
import Checkout from './Checkout';
import Layout from './Layout';
// import './App.scss'

function App() {

  return (

    <Routes>
        <Route element={<Layout />}>  
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
    </Routes>

    
  )
}

export default App

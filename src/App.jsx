import { Routes,Route } from "react-router-dom";
import React, { useEffect } from 'react';
import Home from './Home';
import Checkout from './Checkout';
import Layout from './Layout';
import Login from './Login';
import Payment from './Payment';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import './App.scss'

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])


  return (

    <Routes>
        <Route element={<Layout />}>  
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/login" element={<Login />} />
    </Routes>

    
  )
}

export default App

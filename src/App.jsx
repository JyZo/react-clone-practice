import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './Home';
import Checkout from './Checkout';
import Layout from './Layout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

//publickey 안쓸경우에 CardElement가 렌더링 안됨
const promise = loadStripe(
  'pk_test_51OX6lfEIuGUBwrn0dlJWmRVS741wUyjVkNz37Q5L68Xu5N0XruQoumUtHO2SmzrdY6gfNio3V0l0e0ZHY6yXKpJs00vGlr1xbc',
);

// import './App.scss'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Routes>
      <Route element={<Layout stripe={promise} />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

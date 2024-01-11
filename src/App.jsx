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

const promise = loadStripe(
  'sk_test_51OX6lfEIuGUBwrn0JTDQPn2BvZqoKrw1TGn5B7q4cZwLJy69bKSo5PiisNrCHZLM9xqf5KSLlFsFH8m904soe0Wu003h1IyknK',
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
        <Route path="/payment" element={<Payment stripe={promise} />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

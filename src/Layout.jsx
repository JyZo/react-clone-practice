import React from 'react';
import './Layout.scss';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';

const Layout = ({stripe}) => {
  return (
    <>
      <Header />
      <Elements stripe={stripe}>
        <Outlet />
      </Elements>
    </>
  );
};

export default Layout;

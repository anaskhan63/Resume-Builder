import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: '80vh' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

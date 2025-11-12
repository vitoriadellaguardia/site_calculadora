import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-main font-inter">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
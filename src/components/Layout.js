import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Header />
    <main style={{ padding: '20px' }}>{children}</main>
    <Footer />
  </>
);

export default Layout;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>MyReactSite</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  </nav>
);

export default Navbar;

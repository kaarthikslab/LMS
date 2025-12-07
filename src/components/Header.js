import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => (
  <header className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '60px', padding: '10px 20px', display: 'flex', alignItems: 'center', zIndex: 1000 }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h1 className="title-font" style={{ margin: 0, marginRight: '50px' }}>Library Management</h1>
    </Link>
    <nav style={{ display: 'flex', gap: '20px', marginLeft: 'auto', marginRight: '20px' }}>
      <Link to="/live" className="accent" style={{ textDecoration: 'none' }}>Live Books</Link>
      <Link to="/issued" className="accent" style={{ textDecoration: 'none' }}>Issued</Link>
      <Link to="/restocked" className="accent" style={{ textDecoration: 'none' }}>Restocked</Link>
    </nav>
    <SearchBar />
  </header>
);

export default Header;

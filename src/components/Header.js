import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
    <div style={{ marginTop: '40px' }}> {/* 2 lines below top */}
      <h1 className="primary">Library Management</h1>
    </div>
    <div>
      <Link to="/live" className="accent">Live Books</Link> | 
      <Link to="/issued" className="accent">Issued</Link> | 
      <Link to="/restocked" className="accent">Restocked</Link>
    </div>
    <SearchBar />
  </header>
);

export default Header;

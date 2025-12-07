import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass" style={{ position: 'fixed', top: 0, left: '220px', right: 0, height: '60px', padding: '10px 20px', display: 'flex', alignItems: 'center', zIndex: 1000 }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1 className="title-font" style={{ margin: 0, marginRight: '50px' }}>Library Management</h1>
      </Link>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer', marginRight: '20px' }}>☰</button>
        {menuOpen && (
          <nav className="glass" style={{ position: 'absolute', top: '100%', right: '20px', padding: '10px', minWidth: '150px' }}>
            <Link to="/live" className="accent" style={{ display: 'block', margin: '5px 0', textDecoration: 'none' }}>Live Books</Link>
            <Link to="/issued" className="accent" style={{ display: 'block', margin: '5px 0', textDecoration: 'none' }}>Issued</Link>
            <Link to="/restocked" className="accent" style={{ display: 'block', margin: '5px 0', textDecoration: 'none' }}>Restocked</Link>
            <Link to="/settings" className="accent" style={{ display: 'block', margin: '5px 0', textDecoration: 'none' }}>Settings</Link>
          </nav>
        )}
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass" style={{ position: 'fixed', top: 0, width: '100%', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ marginTop: '40px' }}>
        <h1 className="primary">Library Management</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <nav style={{ display: menuOpen ? 'block' : 'none', position: 'absolute', top: '100%', right: 0, background: 'rgba(255,255,255,0.1)', padding: '10px' }}>
          <Link to="/live" className="accent" style={{ display: 'block', margin: '5px 0' }}>Live Books</Link>
          <Link to="/issued" className="accent" style={{ display: 'block', margin: '5px 0' }}>Issued</Link>
          <Link to="/restocked" className="accent" style={{ display: 'block', margin: '5px 0' }}>Restocked</Link>
          <Link to="/settings" className="accent" style={{ display: 'block', margin: '5px 0' }}>Settings</Link>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px' }}>☰</button>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;

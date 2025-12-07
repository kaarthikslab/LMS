import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass" style={{ position: 'fixed', top: 0, width: '100%', height: '60px', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ flex: 1 }}>
        <h1 className="primary" style={{ margin: 0, lineHeight: '40px' }}>Library Management</h1>
      </div>
      <div style={{ position: 'relative' }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>☰</button>
        {menuOpen && (
          <nav style={{ position: 'absolute', top: '100%', right: 0, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', padding: '10px', minWidth: '150px' }}>
            <Link to="/live" className="accent" style={{ display: 'block', margin: '5px 0', textDecoration: 'none' }}>Live Books</Link>
            <Link to="/issued" className="accent" style={{ display: 'block', margin: '5px 0', textDecoration: 'none' }}>Issued</Link>
            <Link to="/restocked" className="accent" style={{ display: 'block', margin: '5px 0', textDecoration: 'none' }}>Restocked</Link>
            <Link to="/settings" className="accent" style={{ display: 'block', margin: '5px 0', textDecoration: 'none' }}>Settings</Link>
          </nav>
        )}
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;

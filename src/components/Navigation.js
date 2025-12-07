import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="glass" style={{ width: '200px', height: '100vh', padding: '20px', position: 'fixed' }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li><Link to="/" className="primary">Dashboard</Link></li>
      <li><Link to="/live">Live Section</Link></li>
      <li><Link to="/issued">Issued Section</Link></li>
      <li><Link to="/restocked">Restocked Section</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default Navigation;

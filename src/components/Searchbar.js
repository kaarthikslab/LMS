import React from 'react';

const SearchBar = () => (
  <div className="glass" style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
    <input type="text" placeholder="Search books..." style={{ background: 'transparent', border: 'none', color: 'white' }} />
    <span className="accent" style={{ marginLeft: '10px' }}>🔍</span>
  </div>
);

export default SearchBar;

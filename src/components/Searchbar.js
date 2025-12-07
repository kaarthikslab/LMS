import React from 'react';

const SearchBar = () => (
  <div className="glass" style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
    <input type="text" placeholder="Search books..." style={{ background: 'transparent', border: 'none', color: 'white', width: '150px' }} />
    <span className="accent" style={{ marginLeft: '10px' }}>🔍</span>
  </div>
);

export default SearchBar;

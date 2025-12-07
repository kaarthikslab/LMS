import React from 'react';

const Dashboard = () => (
  <div style={{ marginTop: '80px', textAlign: 'center' }}>
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '100px', margin: '50px 0' }}>
      {/* Torana-like frame */}
      <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '10px', background: 'linear-gradient(90deg, #FFD700, #FF9933, #FFD700)', borderRadius: '5px' }}></div>
      <div className="glass square-tile" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', left: '-50px' }}>
        Image 1 Placeholder
      </div>
      <div className="glass square-tile" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Image 2 Placeholder
      </div>
      <div className="glass square-tile" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', right: '-50px' }}>
        Image 3 Placeholder
      </div>
    </div>
  </div>
);

export default Dashboard;

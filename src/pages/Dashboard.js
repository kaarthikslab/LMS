import React from 'react';

const Dashboard = () => (
  <div style={{ marginTop: '100px', textAlign: 'center' }}> {/* 5-line gap below header */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
      <div className="glass square-tile" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Image 1 Placeholder
      </div>
      <div className="glass square-tile" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Image 2 Placeholder
      </div>
      <div className="glass square-tile" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Image 3 Placeholder
      </div>
    </div>
  </div>
);

export default Dashboard;

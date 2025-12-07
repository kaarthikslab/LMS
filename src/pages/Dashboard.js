import React from 'react';
import KPICards from '../components/KPICards';

const Dashboard = () => (
  <div style={{ marginTop: '100px' }}> {/* Offset for fixed header */}
    <KPICards />
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

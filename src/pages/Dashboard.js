import React from 'react';
import KPICards from '../components/KPICards';

const Dashboard = () => (
  <div>
    <KPICards />
    <div className="glass" style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div>Image 1</div>
      <div>Image 2</div>
      <div>Image 3</div>
    </div>
  </div>
);

export default Dashboard

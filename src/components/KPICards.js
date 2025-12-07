import React from 'react';
import { kpis } from '../data/mockdata';

const KPICards = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
    <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
      <h2 className="accent">{kpis.totalBooks}</h2>
      <p>Total Books</p>
    </div>
    {/* Repeat for totalIssued, totalExpenditure, currentStock */}
  </div>
);

export default KPICards;

import React from 'react';
import { useParams } from 'react-router-dom';
import { mockBooks } from '../data/mockData';

const RestockedDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === parseInt(id));

  return (
    <div className="page-bg glass" style={{ padding: '20px', marginTop: '80px', maxWidth: '600px', margin: '80px auto' }}>
      <h2>Restock Logs for {book.name}</h2>
      {book.restocked.map((log, idx) => (
        <div key={idx} className="glass" style={{ margin: '10px 0', padding: '10px' }}>
          <p><strong>{log.date}</strong></p>
          <p>Quantity: <span className="accent">{log.quantity}</span></p>
          <p>Unit Price: ${log.unitPrice}</p>
          <p>Supplier: {log.supplier}</p>
        </div>
      ))}
    </div>
  );
};

export default RestockedDetails;

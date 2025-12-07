import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockBooks } from '../data/mockdata';

const BookDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === parseInt(id));
  const [status, setStatus] = useState(book.status);

  return (
    <div className="glass" style={{ padding: '20px' }}>
      <h2>{book.name}</h2>
      <p>Price: <span className="accent">${book.price}</span></p>
      <p>Stock: {book.stock}</p>
      <label>Status: <input type="checkbox" checked={status === 'available'} onChange={() => setStatus(status === 'available' ? 'issued' : 'available')} /></label>
      <button className="neu-button" style={{ marginTop: '10px' }}>Restock Book</button>
    </div>
  );
};

export default BookDetails;

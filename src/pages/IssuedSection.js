import React from 'react';
import BookTile from '../components/BookTile';
import { mockBooks } from '../data/mockData';

const IssuedSection = () => {
  const totalExpenditure = mockBooks.reduce((sum, book) => sum + book.issued.reduce((subSum, i) => subSum + (book.price * (new Date(i.returnedDate || new Date()) - new Date(i.issuedDate)) / (1000 * 60 * 60 * 24)), 0), 0);

  return (
    <div className="page-bg" style={{ marginTop: '80px' }}>
      <div className="glass" style={{ padding: '10px', marginBottom: '20px', textAlign: 'center' }}>
        <h3>Total Expenditure: <span className="accent">${totalExpenditure.toFixed(2)}</span></h3>
      </div>
      <div style={{ marginTop: '40px' }}>
        <h2 className="accent">Issued Books</h2>
        <div className="grid">
          {mockBooks.filter(b => b.status === 'issued').map(book => <BookTile key={book.id} book={book} type="issued" />)}
        </div>
      </div>
    </div>
  );
};

export default IssuedSection;

import React from 'react';
import BookTile from '../components/BookTile';
import { mockBooks } from '../data/mockData';

const IssuedSection = () => (
  <div className="page-bg" style={{ marginTop: '80px' }}>
    <h2 className="accent">Issued Books</h2>
    <div className="grid">
      {mockBooks.filter(b => b.status === 'issued').map(book => <BookTile key={book.id} book={book} type="issued" />)}
    </div>
  </div>
);

export default IssuedSection;

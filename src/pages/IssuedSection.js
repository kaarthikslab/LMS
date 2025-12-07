import React from 'react';
import BookTile from '../components/BookTile';
import { mockBooks } from '../data/mockdata';

const IssuedSection = () => (
  <div style={{ marginTop: '100px' }}>
    <h2 className="primary">Issued Books</h2>
    <div className="grid">
      {mockBooks.filter(b => b.status === 'issued').map(book => <BookTile key={book.id} book={book} type="issued" />)}
    </div>
  </div>
);

export default IssuedSection;

import React from 'react';
import BookTile from '../components/BookTile';
import { mockBooks } from '../data/mockData';

const LiveSection = () => (
  <div className="page-bg" style={{ marginTop: '80px' }}>
    <h2 className="accent">Live Books</h2>
    <div className="grid">
      {mockBooks.filter(b => b.status === 'available').map(book => <BookTile key={book.id} book={book} type="book" />)}
    </div>
  </div>
);

export default LiveSection;

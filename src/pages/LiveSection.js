import React from 'react';
import BookTile from '../components/BookTile';
import { mockBooks } from '../data/mockdata';

const LiveSection = () => (
  <div style={{ marginTop: '100px' }}>
    <h2 className="primary">Live Books</h2>
    <div className="grid">
      {mockBooks.filter(b => b.status === 'available').map(book => <BookTile key={book.id} book={book} type="book" />)}
    </div>
  </div>
);

export default LiveSection;

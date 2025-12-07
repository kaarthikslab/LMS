import React from 'react';
import BookTile from '../components/BookTile';
import { mockBooks } from '../data/mockData';

const LiveSection = () => (
  <div className="grid">
    {mockBooks.filter(b => b.status === 'available').map(book => <BookTile key={book.id} book={book} type="book" />)}
  </div>
);

export default LiveSection;

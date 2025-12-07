import React from 'react';
import BookTile from '../components/BookTile';
import { mockBooks } from '../data/mockData';

const RestockedSection = () => (
  <div style={{ marginTop: '100px' }}> {/* 5-line gap below header */}
    <h2 className="primary">Restocked Books</h2>
    <div className="grid">
      {mockBooks.filter(b => b.restocked.length > 0).map(book => <BookTile key={book.id} book={book} type="restocked" />)}
    </div>
  </div>
);

export default RestockedSection;

import React from 'react';
import { Link } from 'react-router-dom';

const BookTile = ({ book, type }) => (
  <Link to={`/${type}/${book.id}`} className="glass square-tile">
    <h3>{book.name}</h3>
    <p>{book.code}</p>
    <small>{book.publisher}</small>
  </Link>
);

export default BookTile;

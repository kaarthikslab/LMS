import React from 'react';
import { useParams } from 'react-router-dom';
import { mockBooks } from '../data/mockData';

const IssuedDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === parseInt(id));
  const totalExpenditure = book.issued.reduce((sum, i) => sum + (book.price * (new Date(i.returnedDate || new Date()) - new Date(i.issuedDate)) / (1000 * 60 * 60 * 24)), 0);

  return (
    <div className="page-bg" style={{ marginTop: '80px' }}>
      <div className="glass" style={{ position: 'fixed', top: '80px', right: '20px', padding: '10px', zIndex: 1000 }}>
        <h3>Total

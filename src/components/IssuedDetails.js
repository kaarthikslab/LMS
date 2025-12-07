import React from 'react';
import { useParams } from 'react-router-dom';
import { mockBooks } from '../data/mockData';

const IssuedDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === parseInt(id));
  const totalExpenditure = book.issued.reduce((sum, i) => sum + (book.price * (new Date(i.returnedDate || new Date()) - new Date(i.issuedDate)) / (1000 * 60 * 60 * 24)), 0);

  return (
    <div className="page-bg" style={{ marginTop: '80px' }}>
      <div className="glass" style={{ padding: '10px', marginBottom: '20px', textAlign: 'center' }}>
        <h3>Total Expenditure: <span className="accent">${totalExpenditure.toFixed(2)}</span></h3>
      </div>
      <div style={{ marginTop: '40px' }}>
        <div className="glass" style={{ padding: '20px', overflowY: 'auto', height: '400px' }}>
          <table style={{ width: '100%', color: '#333' }}>
            <thead>
              <tr>
                <th>Name</th><th>Issued Date</th><th>Due Date</th><th>Returned Date</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {book.issued.map((i, idx) => (
                <tr key={idx}>
                  <td>{i.name}</td>
                  <td>{i.issuedDate}</td>
                  <td>{i.dueDate}</td>
                  <td>{i.returnedDate || 'N/A'}</td>
                  <td>{i.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IssuedDetails;

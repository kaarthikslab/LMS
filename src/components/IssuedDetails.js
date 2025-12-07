import React from 'react';
import { useParams } from 'react-router-dom';
import { mockBooks } from '../data/mockData';

const IssuedDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === parseInt(id));
  const totalExpenditure = book.issued.reduce((sum, i) => sum + (book.price * (new Date(i.returnedDate || new Date()) - new Date(i.issuedDate)) / (1000 * 60 * 60 * 24)), 0);

  return (
    <div>
      <div className="glass" style={{ position: 'absolute', top: '20px', right: '20px', padding: '10px' }}>
        <h3>Total Expenditure: <span className="accent">${totalExpenditure.toFixed(2)}</span></h3>
      </div>
      <div className="glass" style={{ padding: '20px', overflowY: 'auto', height: '400px' }}>
        <table style={{ width: '100%', color: 'white' }}>
          <thead>
            <tr>
              <th>Name</th><th>Issued Date</th><th>Due Date</th><th>Returned Date</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {book.issued.map((i, idx) => (
              <tr key={idx}>
                <td>{i.name}</td><td>{i.issuedDate}</td><td>{i.dueDate}</td><td>{i.returnedDate || 'N/A'}</td><td>{i.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuedDetails;

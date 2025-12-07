export const mockBooks = [
  { id: 1, name: 'Book A', code: 'B001', publisher: 'Pub A', price: 10, stock: 5, status: 'available', issued: [], restocked: [{ date: '2023-10-01', quantity: 10, unitPrice: 10, supplier: 'Supplier X' }] },
  { id: 2, name: 'Book B', code: 'B002', publisher: 'Pub B', price: 15, stock: 0, status: 'issued', issued: [{ name: 'Student Y', issuedDate: '2023-09-01', dueDate: '2023-10-01', returnedDate: null, status: 'out' }], restocked: [] },
  // Add more as needed for testing
];

export const kpis = { totalBooks: 100, totalIssued: 20, totalExpenditure: 500, currentStock: 80 };

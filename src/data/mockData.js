export const mockBooks = [
  { id: 1, name: 'Book A', code: 'B001', publisher: 'Pub A', price: 10, stock: 5, status: 'available', issued: [], restocked: [{ date: '2023-10-01', quantity: 10, unitPrice: 10, supplier: 'Supplier X' }] },
  { id: 2, name: 'Book B', code: 'B002', publisher: 'Pub B', price: 15, stock: 0, status: 'issued', issued: [{ name: 'Student Y', issuedDate: '2023-09-01', dueDate: '2023-10-01', returnedDate: null, status: 'out' }], restocked: [] },
  { id: 3, name: 'Book C', code: 'B003', publisher: 'Pub C', price: 20, stock: 3, status: 'available', issued: [], restocked: [{ date: '2023-09-15', quantity: 5, unitPrice: 18, supplier: 'Supplier Z' }] },
  { id: 4, name: 'Book D', code: 'B004', publisher: 'Pub D', price: 12, stock: 0, status: 'issued', issued: [{ name: 'Student X', issuedDate: '2023-08-01', dueDate: '2023-09-01', returnedDate: '2023-08-15', status: 'returned' }], restocked: [] },
  { id: 5, name: 'Book E', code: 'B005', publisher: 'Pub E', price: 25, stock: 2, status: 'available', issued: [], restocked: [{ date: '2023-07-01', quantity: 8, unitPrice: 22, supplier: 'Supplier W' }] },
];

export const kpis = { totalBooks: 100, totalIssued: 20, totalExpenditure: 500, currentStock: 80 };

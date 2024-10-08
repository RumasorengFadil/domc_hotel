import React from 'react';

const PriceTable = () => {
  const rooms = [
    { type: 'Standar', price: 'Rp. 100.000' },
    { type: 'Deluxe', price: 'Rp. 500.000' },
    { type: 'Family', price: 'Rp. 1.000.000' },
  ];

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.header}>Type</th>
          <th style={styles.header}>Price</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((room, index) => (
          <tr key={index}>
            <td style={styles.cell}>{room.type}</td>
            <td style={styles.cell}>{room.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    fontSize : "16px"
  },
  header: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd',
  },
  cell: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default PriceTable;
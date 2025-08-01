import React from 'react';

import Navbar from './components/Navbar';
const OrderSuccess = () => {
  return (
    <div>
      <Navbar/>
    <div style={styles.container}>
      
      <h2 style={styles.title}>Your Order has been Placed Successfully!</h2>
      <p style={styles.message}>Thank you for choosing us.</p>
    </div>
    </div>
  );
};

export default OrderSuccess;

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem',
    background: '#fff',
    maxWidth: '500px',
    margin: '100px auto',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  icon: {
    color: 'green',
    fontSize: '60px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  message: {
    fontSize: '18px',
    color: '#555',
  }
};
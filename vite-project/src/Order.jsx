import React from 'react';


const OrderSuccess = () => {
  return (
    <div style={styles.container}>
      
      <h2 style={styles.title}>Order Placed Successfully!</h2>
      <p style={styles.message}>Thank you for shopping with us.</p>
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
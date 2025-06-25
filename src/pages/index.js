import React from "react"

const IndexPage = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #4a90e2, #50c8d4)',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  }}>
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      maxWidth: '600px',
      width: '100%',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        color: '#f8f8f8',
      }}>
        Site Under Construction
      </h1>
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#f8f8f8',
        marginBottom: '30px',
      }}>
        We're working hard to get this site up and running. Stay tuned for something transformative and inspiring!
      </p>
      <p style={{
        fontSize: '1.1rem',
        color: '#f8f8f8',
        fontStyle: 'italic',
      }}>
        In the meantime, sign up to be the first to know when we launch.
      </p>
      <button style={{
        padding: '15px 30px',
        backgroundColor: '#50c8d4',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        fontSize: '1.1rem',
        cursor: 'pointer',
        marginTop: '20px',
        transition: 'background-color 0.3s',
      }} onMouseOver={(e) => e.target.style.backgroundColor = '#4a90e2'} onMouseOut={(e) => e.target.style.backgroundColor = '#50c8d4'}>
        Sign Up for Updates
      </button>
    </div>
  </div>
)

export default IndexPage

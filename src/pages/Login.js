import React from 'react';
import './Login.css'; 
import Mobilefooter from '../components/Mobilefooter';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send request to server
  };

  return (
    <div className="login-container">
      <div className="inner">
        <section>
          <h3 style={{ textAlign: 'center' }}>Welcome to JNTUGV NSS PORTAL</h3>
          <div className="login-area">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" name="username" placeholder="Username" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Password" required />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block login-btn" name="login">Login</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Mobilefooter />
    </div>
  );
}

export default Login;

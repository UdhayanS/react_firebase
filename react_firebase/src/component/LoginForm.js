// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../authService'; // Ensure this path is correct

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      navigate('/home'); // Redirect to home page on successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card p-4">
              <h2 className="text-center mb-4">Login</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
              />
              <button onClick={handleLogin} className="btn btn-primary w-100 mb-3">Login</button>
              <p className="text-center">Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { registerUser } from '../authService'; // Ensure this path is correct

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    registerUser(email, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password Atleast 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={handleSignUp} className="btn btn-primary w-100">Sign Up</button>
        <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default SignUpForm;

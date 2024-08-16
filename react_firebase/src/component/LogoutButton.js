// LogoutButton.js
import React from 'react';
import { logoutUser } from '../authService';  // Update path to '../authService'

const LogoutButton = () => {
  return <button onClick={logoutUser}>Logout</button>;
};

export default LogoutButton;

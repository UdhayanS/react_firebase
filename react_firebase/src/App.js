// App.js
import React, { useState, useEffect } from 'react';
import SignUpForm from './component/SignUpForm';
import LoginForm from './component/LoginForm';
import HomePage from './component/HomePage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './component/Nav';



const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!user ? <LoginForm /> : <HomePage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={user ? <HomePage /> : <LoginForm />} />
        <Route path="/nav" element={user ? <Nav /> : <LoginForm />} />
        <Route path="/" element={user ? <HomePage /> : <LoginForm />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Ensure this path is correct
import Nav from './Nav';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="home-container">
      <div className="container text-center">
        <Nav />
        <h1 style={{paddingTop:"100px"}}>Welcome to the Udhayan site</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque obcaecati porro mollitia quidem pariatur cum, vel commodi tempore soluta, provident, nihil dolorum enim laborum nobis iste ullam officiis quibusdam? Dolorem odit doloribus, quo facere nostrum tenetur reprehenderit. Nam illum soluta repellendus. Sapiente accusantium totam sunt officiis ipsa qui molestias sed?</p>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        
      </div>
    </div>
  );
};

export default HomePage;

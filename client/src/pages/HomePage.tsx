import React from 'react';
import { Link } from 'react-router-dom';


const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Bienvenue sur votre plateforme tout-en-un!</h1>


      <div className="call-to-action">
        <Link to="/register">Inscrivez-vous dès aujourd'hui!</Link>
      </div>
    </div>
  );
};

export default HomePage;
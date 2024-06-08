import React from 'react';
import { FaCode, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container ">
      <div className="glass">
        <div className="loading-text">Chargement</div>
        <div className="developer-icons">
          <div className="icon"><FaCode /></div>
          <div className="icon"><FaLaptopCode /></div>
          <div className="icon"><FaDatabase /></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

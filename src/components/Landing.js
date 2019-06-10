import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__box"></div>
      <a className="landing__logo">JP</a>
      <div className="landing__title">
        <h1 className="title el">Julie Park</h1>
        <p className="subtitle el"><i className="fas fa-laptop sm"></i> developer & designer</p>
        <p className="el"><i className="fas fa-location-arrow sm"></i> seattle, washington</p>
        <h2 className="enter el"><a className="links el">enter</a></h2>
      </div>
      <div className="landing__content">
        <h2 className="el"></h2>
        <p></p>
      </div>
    </div>
  )
}

export default Landing;

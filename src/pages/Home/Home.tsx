import React from 'react';
import face from '@assets/face.jpg';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img className="home-hero" src={face} />
        <h1>Daniel Wang</h1>
        <h3>Software Engineer</h3>
      </div>
    </>
  );
};

export default React.memo(Home);

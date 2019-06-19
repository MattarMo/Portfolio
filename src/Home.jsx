import React from 'react';
import '../src/styles/HomeStyle.css';

const Home = () => {
  return (
    <body>
      <div className="container">
        <div className="row">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
      </div>
    </body>
  );
};

export default Home;

/*
<header id="home-section">
<div className="dark-overlay">
  <div className="home-inner container">
    <div className="row">
      <div className="col-lg-8-none d-lg-block">
        <h1 className="display-4">Mohammad Mattar</h1>
        <div className="d-flex">
          <div className="p-4 align-self-start"></div>
          <img src="../public/Mattar.pdf" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
</header>
*/

import React from 'react';
import '../src/styles/HeadNavStyle.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const HeadNav = () => {
  return (
    <body>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Portfolio
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <SocialIcon
                  url="https://www.linkedin.com/in/mohammad-mattar-3468a311b/"
                  network="linkedin"
                  fgColor="#ffffff"
                  style={{ height: 50, width: 50 }}
                />
              </li>
              <li className="nav-item">
                <SocialIcon
                  url="https://www.github.com/mattarmo"
                  network="github"
                  bgColor="#000000"
                  fgColor="#ffffff"
                  style={{ height: 50, width: 50 }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  );
};

export default HeadNav;

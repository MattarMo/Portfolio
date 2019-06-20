import React from 'react';
import '../styles/HeadNavStyle.css';
import { SocialIcon } from 'react-social-icons';
import { Navbar } from 'react-bootstrap';

const HeadNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Portfolio '}
        </Navbar.Brand>
        <Navbar.Collapse className="logo justify-content-end">
          <li>
            <ul>
              <SocialIcon
                url="https://www.linkedin.com/in/mohammad-mattar-3468a311b/"
                network="linkedin"
                fgColor="#ffffff"
                style={{ height: 30, width: 30 }}
              />
            </ul>
          </li>
          <li>
            <ul>
              <SocialIcon
                url="https://www.github.com/mattarmo"
                network="github"
                bgColor="#000000"
                fgColor="#ffffff"
                style={{ height: 30, width: 30 }}
              />
            </ul>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeadNav;

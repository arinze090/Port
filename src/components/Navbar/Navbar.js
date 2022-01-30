import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import {Link} from 'react-scroll';
import {BiMenuAltRight} from 'react-icons/bi';
import {MdClose} from 'react-icons/md';
import './Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">ArinzeN</h1>
      </Link>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}>
        <li className="li">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li className="li">
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li className="li">
          <Link to="projects" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li className="li">
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>

        <li className="li">
          <a href="https://drive.google.com/drive/folders/1JVMEZH-KhbkrtqtOuwhS35Teu1t4PCjC?usp=sharing">
            <button className="resume">Resume</button>
          </a>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <MdClose /> : <BiMenuAltRight />}
      </button>
    </nav>
  );
}

export default Navbar;

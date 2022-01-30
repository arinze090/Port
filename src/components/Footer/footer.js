import React from 'react';
import './footer.css';
import {FaTwitter, FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="socials">
          <ul>
            <li>
              <a href="http://github.com/arinze090">
                <FaGithub
                  style={{width: 60, height: 20, color: 'whitesmoke'}}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/arinze-nchor-nwankwo-778888130/">
                <FaLinkedinIn
                  style={{width: 60, height: 20, color: 'whitesmoke'}}
                />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/arinze__n">
                <FaTwitter
                  style={{width: 60, height: 20, color: 'whitesmoke'}}
                />
              </a>
            </li>
            <li>
              <a href="http://instagram.com/_arinze_n">
                <FaInstagram
                  style={{width: 60, height: 20, color: 'whitesmoke'}}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="design">
          <p>Designed & Built by Arinze Nchor</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

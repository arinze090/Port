import React from "react";
import "./footer.css";
import { FaTwitter, FaLinkedinIn, FaBehance, FaDribbble } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.behance.net/nancyomoruyi12">
                <FaBehance
                  style={{ width: 60, height: 20, color: "#001d4a" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nancy-omoruyi-6aab30164/">
                <FaLinkedinIn
                  style={{ width: 60, height: 20, color: "#001d4a" }}
                />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/isokennn">
                <FaTwitter
                  style={{ width: 60, height: 20, color: "#001d4a" }}
                />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/isokennn">
                <FaDribbble
                  style={{ width: 60, height: 20, color: "#001d4a" }}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="design">
          <p>Designed & Built by Nancy Omoruyi</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

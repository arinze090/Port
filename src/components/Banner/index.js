import React from 'react';
import './banner.css';

function Banner() {
  return (
    <div id="home">
      <div className="banner__container">
        <div className="content">
          <p className="hi" style={{transitionDelay: 200}}>
            Hi, my name is
          </p>
          <h1 className="name">Arinze Nchor-Nwankwo.</h1>
          <h1 className="do">I build things for the web and apps</h1>
          <p className="about">
            I'm a Frontend developer specializing in building (and occasionally <br />
            designing) exceptional digital experiences. <br /> Currently, I’m focused
            on building accessible, human-centered products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;

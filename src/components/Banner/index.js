import React, { useEffect } from "react";
import "./banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="home">
      <div className="banner__container">
        <div className="content">
          <p className="hi" style={{ transitionDelay: 200 }}>
            Hi, my name is
          </p>
          <h1 className="name" data-aos="zoom-in-right" data-aos-delay="500">
            Nancy Omoruyi.
          </h1>
          <h1
            className="do"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-easing="linear"
          >
            A self-motivated graduate with experience working in the creative
            industry. Product Design and Product Management are two of my
            passions. <br />
            Currently, I’m focused on designing & building accessible,
            human-centered products
          </h1>
          <p
            className="about"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="800"
          >
            Design is really important to the creative community, and I would
            love to be a big part of it to help create diverse and transferable
            skills, because the ideas I generate, the people I meet, and the
            places I visit are all limitless.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;

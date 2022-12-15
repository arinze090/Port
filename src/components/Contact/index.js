import React, { useEffect } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="contact">
      <div className="contact">
        <div
          className="contact__container"
          data-aos="fade-up-right"
          data-aos-delay="100"
          data-aos-easing="linear"
        >
          <h1>Get In Touch ✋ </h1>
        </div>
        <div className="contacts">
          <p
            className="content__tags"
            data-aos="fade-up-left"
            data-aos-delay="400"
          >
            You've got a finished desgn or an existing project and clear picture
            of how your web application/website should work ? Or perhaps you are
            looking for a UI/UX designer to collaborate with in your team ?
          </p>
          <p
            className="tag2"
            data-aos="fade-up-right"
            data-aos-delay="900"
            data-aos-easing="linear"
          >
            Wherever you are, I would be happy to help. If it seems very urgent,
            just put up a call
          </p>
        </div>
        <div>
          <a class="mailto" href="mailto:nancyomoruyi4@gmail.com">
            <button className="hello">Say Hello 👋</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

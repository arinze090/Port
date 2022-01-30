import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <div className="contact__container">
          <h1>Get In Touch ✋ </h1>
        </div>
        <div className="contacts">
          <p className="content__tags">
            You've got a finished desgn or an existing project and clear picture
            of how your web application/website should work ? Or perhaps you are
            looking for a developer to collaborate with in your team ?
          </p>
          <p className="tag2">
            Wherever you are, I would be happy to help. If it seems very urgent,
            just put up a call
          </p>
        </div>
        <div>
          <a class="mailto" href="mailto:narinzeanthony@yahoo.com">
            <button className="hello">Say Hello 👋</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

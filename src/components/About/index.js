import React from 'react';
import './about.css';
import {FaReact, FaWordpress} from 'react-icons/fa';
import {SiExpo, SiJavascript, SiHtml5, SiCss3} from 'react-icons/si';

const data = [
  {
    id: 1,
    name: 'React',
    icon: <FaReact />,
  },
  {
    id: 2,
    name: 'React Native',
    icon: <SiExpo />,
  },
  {
    id: 3,
    name: 'JavaScript (ES6+)',
    icon: <SiJavascript />,
  },
  {
    id: 4,
    name: 'Html5',
    icon: <SiHtml5 />,
  },
  {
    id: 5,
    name: 'WordPress',
    icon: <FaWordpress />,
  },
  {
    id: 6,
    name: 'CSS',
    icon: <SiCss3 />,
  },
];

function About() {
  return (
    <div id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="title">
            <p className="aboutMe">About Me</p>
            <hr />
          </div>

          <div className="description">
            <div className="details">
              {/* <ScrollAnimation
                animateIn="wobble"
                // initiallyVisible={true}
                delay={1000}>
                <p>
                  I'm an innovative, detailed oriented developer, passionate
                  about combining beautiful structured codes with nice
                  interfaces and flawless functionalities. I have experience
                  developing and designing web interfaces from simple landing
                  pages to multi-paged web applications. My goal has always been
                  to reconnect with craftmanship & efficiently utilize available
                  tools and techniques to build high performance products and
                  efficient systems
                </p>
              </ScrollAnimation> */}

              <p>
                I'm an innovative, detailed oriented developer, passionate about
                combining beautiful structured codes with nice interfaces and
                flawless functionalities. I have experience developing and
                designing web interfaces from simple landing pages to
                multi-paged web applications. My goal has always been to
                reconnect with craftmanship & efficiently utilize available
                tools and techniques to build high performance products and
                efficient systems
              </p>
              <p>
                I derive pleasure in learning new and better ways of doing
                things and buildimg efficient codes. When I'm not writing codes,
                I probably blabbing about football, crypto or tech.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <div className="skill">
                {data.map((cur, index) => (
                  <div className="skills" key={index}>
                    {/* <GiBullseye /> */}
                    <div>{cur.icon} </div>
                    <p>{cur.name} </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="image">
              <img src={require('../images/1.jpg')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

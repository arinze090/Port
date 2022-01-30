import React from 'react';
import './project.css';
import {FaGithub} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';

const data = [
  {
    id: 1,
    name: 'Portfolio v1',
    image: require('../images/Portfolio.JPG'),
    description:
      'This is my very first portfolio which I enjoyed creating using React.js and hosting on Netlify',
    language: 'React, Styled-Components, Material-ui ',
    githubLink: 'https://github.com/arinze090',
    link: '',
  },
  {
    id: 2,
    name: 'Crypto Tracker',
    image: require('../images/Crypto.JPG'),
    description:
      'With the help of React, Next.js and CoinGecko API this project was built. Crypto Tracker displays amlist of crypto-currencies and their various charts, prices, as well as icons/logos',
    language: 'React, Next.js, Axios, Coinmarker API',
    githubLink: 'https://github.com/arinze090/crypto-Tracker',
    link: 'https://arinze-cryptotracker.netlify.app/',
  },
  {
    id: 3,
    name: 'Netflix Clone',
    image: require('../images/Netflix.JPG'),
    description:
      'A basic Netflix clone that displays movies based on categories and also their trailers. Accomplished with the aid of Tmdb movie API, React and Firebase. ',
    language: 'React, Firebase, Axios, TMDB-API',
    githubLink: 'https://github.com/arinze090',
    link: 'https://netflix-clone-ed3ed.web.app/',
  },
  {
    id: 4,
    name: 'PS5 DualSense',
    image: require('../images/PS5.JPG'),
    description:
      ' Basic landing page for PS5 DulaSense built with mere HTML & CSS ',
    language: 'HTML, CSS',
    githubLink: 'https://github.com/arinze090/PS5-DualSense',
    link: 'https://arinze-ps5.netlify.app/#',
  },
  {
    id: 5,
    name: 'DRO Health',
    image: require('../images/DRO.JPG'),
    description:
      'A landing page fro DRO Health built with the aid of WordPress',
    language: 'WordPress, PHP',
    githubLink: '',
    link: 'https://epic-hawking.64-227-40-128.plesk.page/',
  },
  {
    id: 6,
    name: 'Dashboard',
    image: require('../images/Dashboard.JPG'),
    description: '',
    language: 'HTML, CSS',
    githubLink: 'https://github.com/arinze090/Dashboard',
    link: 'https://determined-jones-6268b3.netlify.app/',
  },
  // {
  //   id: 7,
  //   image: {
  //     uri:
  //       'https://drive.google.com/file/d/1J6dwZw5cfXgDksNjzhd2XpB4iOlWeNVM/view?usp=sharing',
  //   },
  // },
];

function Projects() {
  return (
    <div id="projects">
      <div className="project__container">
        <div className="project__content">
          <div className="title">
            <p className="project">Projects I've Built</p>
            <hr />
          </div>
          {data.map((cur, index) => (
            <div className="project__details" key={index}>
              <div className="link">
                <a className="anc" href={cur.link}>
                  <img src={cur.image} alt="" className="img" />
                </a>
              </div>
              <div className="info">
                <div className="projectDetails">
                  <p>Featured Project</p>
                  <h1>{cur.name}</h1>

                  <div className="projectDescription">
                    <p>{cur.description}</p>
                  </div>
                  <div className="codes">
                    <p>{cur.language}</p>
                  </div>
                  <div className="projectLinks">
                    <a href={cur.githubLink}>
                      <FaGithub
                        style={{width: 60, height: 22, color: 'whitesmoke'}}
                      />
                    </a>
                    <a href={cur.link}>
                      <FiExternalLink
                        style={{width: 60, height: 22, color: 'whitesmoke'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h1 className="mobile-apps">Mobile Apps I've worked on</h1>
          <div className="expos">
            {/* <div className="expo">
              <VideoBg autoPlay loop muted type="video/mp4" />
            </div> */}
            {/* <div className="expo">
              <VideoBg autoPlay loop muted src={Vid3} type="video/mp4" />
            </div> */}
            <h1 className="exposh1">
              To find more of my mobile-apps project, click on this link
              <a
                className="mobileApps"
                href="https://drive.google.com/drive/folders/1JVMEZH-KhbkrtqtOuwhS35Teu1t4PCjC?usp=sharing">
                Mobile-Apps Projects
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

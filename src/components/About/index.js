import React, { useEffect } from "react";
import "./about.css";
import { FiFigma } from "react-icons/fi";
import { FaHandPointRight } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { FcManager, FcWorkflow } from "react-icons/fc";
import { SiAdobephotoshop } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    name: "Figma",
    icon: <FiFigma />,
  },
  {
    id: 2,
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    id: 3,
    name: "Product Management",
    icon: <FcManager />,
  },
  {
    id: 4,
    name: "User Flows",
    icon: <FcWorkflow />,
  },
  {
    id: 5,
    name: "User Research",
    icon: <GiArchiveResearch />,
  },
  {
    id: 6,
    name: "Competitive Analysis",
    icon: <FaHandPointRight />,
  },
  {
    id: 7,
    name: "Prototyping",
    icon: <FaHandPointRight />,
  },
  {
    id: 8,
    name: "Information Architecture",
    icon: <FaHandPointRight />,
  },
];

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="title" data-aos="zoom-in-right">
            <p className="aboutMe">About Me</p>
            <hr />
          </div>

          <div className="description">
            <div className="details">
              <p data-aos="fade-right" data-aos-delay="100">
                Conducting user research and interviews, building user flows,
                creating low-fidelity and highfidelity prototypes and managing
                data involved in this process of design are some of my skills.
                For my designs, I utilize Figma and Adobe Photoshop.
              </p>
              <p
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-easing="linear"
              >
                I have a strong track experience of managing and coaching a wide
                range of qualitative and quantitative research projects, and I
                believe this is something I can add to whatever team or office I
                find myself in.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="700"
                data-aos-easing="linear"
              >
                For my long-term goals in 3-5 years, I hope to be recognized as
                a very resourceful designer. I really want to focus on being a
                strong team player, leading a team that is committed to
                producing excellent design at all costs. I want to work
                somewhere, where I can develop myself and give back to others. I
                believe that my skill set, which includes strong communication
                skills and attention to detail, qualifies me for this role.
              </p>
              <p>Here are my attained skillsets</p>
              <div className="skill">
                {data.map((cur, index) => (
                  <div className="skills" key={index}>
                    <div>{cur.icon} </div>
                    <p>{cur.name} </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="image"
              data-aos="zoom-in-left"
              data-aos-delay="300"
              data-aos-offset="300"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img src={require("../images/Nancy.jpg")} alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;

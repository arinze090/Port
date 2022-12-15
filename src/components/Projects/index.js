import React, { useEffect } from "react";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    name: "Case study for Fintech app designed to provide users with the easiest and fastest transactions.",
    image: require("../images/Givr.png"),
    link: "https://www.behance.net/gallery/132955005/Case-study-for-a-finance-app-project",
    caseStudy:
      "https://drive.google.com/file/d/14feNaYhQfEfzmRAalUrMSEYN97qTD5GE/view",
  }, 
  {
    id: 2,
    name: "Case Study for Zara's Landing Page Re-design.",
    image: require("../images/Zara.png"),
    link: "https://www.behance.net/gallery/139576973/Case-study-for-Zara-Landing-page-re-design",
    caseStudy:
      "https://drive.google.com/file/d/1iuqQez0CcSSRQT_QBw2zWvQ9i2XWn1Gm/view",
  },
  {
    id: 3,
    name: "Case study for Mover App which was designed to help people move their properties without struggle.",
    image: require("../images/Movr.png"),
    link: "https://www.behance.net/gallery/132577067/Case-Study-for-a-relocation-app-project",
    caseStudy:
      "https://drive.google.com/file/d/1RRuck-v45xS_ABtY2UXEqj7QTuX3ndaL/view",
  },
  {
    id: 4,
    name: "Website landing page for Foodtown.",
    image: require("../images/FoodT.png"),
    link: "https://www.behance.net/gallery/126371569/Landing-page-for-a-restaurant",
    caseStudy:
      "https://drive.google.com/file/d/1_bMV8k2gH6o9vJcz5x3-Ey2FVLw68gB2/view",
  },
];

function Projects() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="projects">
      <div className="project__container">
        <div className="project__content">
          <div className="title" data-aos="zoom-in-right">
            <p className="project">Projects I've Designed 🧳</p>
            <hr />
          </div>

          <div
            className="pContain"
            data-aos="fade-up-right"
            data-aos-delay="300"
            data-aos-offset="300"
            data-aos-easing="linear"
          >
            {data.map((cur, i) => (
              <div className="pLink">
                <a href={cur.link}>
                  <img src={cur.image} alt="" className="images" />
                </a>
                <p className="pText">{cur.name} </p>
                <a href={cur.caseStudy} className="anchor">
                  <p>🔗 Case Study 📚</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

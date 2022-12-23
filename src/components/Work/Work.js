import React from "react";
import styles from "./Work.module.css";
// import img from "../../assets/projects/ieeecsvit_ss.png";
// import WorkContainer from "./WorkContainer/WorkContainer";
import ProjectCard from "./ProjectCard/ProjectCard";
import { FaChevronDown } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll";
// import WorkContainerSite from "./WorkContainer-siteLink/WorkContainerSite";
const Work = (props) => {
  return (
    <div className={styles.work}>
      <div className={styles.whiteText}>My Work</div>
      <br></br>
      <div className={styles.projectsOuter}>
        <ProjectCard
          title="Forgetful Foodie"
          domains={[
            "Interaction Design",
            "Usability Analysis",
            "Wireframing",
            "Prototyping",
          ]}
          tech_used={["Figma", "Illustrator"]}
          protoLink="https://www.figma.com/proto/HUxf0bhkT3OOsViPuXPg1J/SI-582-Forgetful-Foodie?node-id=133%3A21"
          project_img="forgetful"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "Our Solution": "Lorem ipsum 2",
            "My Role": "Lorem Ipsum 3",
          }}
        />
        <ProjectCard
          title="Dr Menon's Palliative Care"
          domains={[
            "Logo Ideation and Design",
            "Graphic Design",
            "Real-World design",
            "Print Media",
          ]}
          tech_used={["Figma", "Illustrator"]}
          designLink="https://www.figma.com/file/A6YfWv2cVPNOfp065cL2pU/Mom's-Website?node-id=0%3A1&t=3Yh17gzVfGuswQn2-3"
          project_img="drmenon"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "Our Solution": "Lorem ipsum 2",
            "My Role": "Lorem Ipsum 3",
          }}
        />
        <ProjectCard
          title="RefugeeOne"
          domains={["Consulting", "Contextual Inquiry", "Pain Point Discovery"]}
          tech_used={["Google Workspace"]}
          reportLink="https://drive.google.com/file/d/1vzj4wiFZbBW2xZKafOocEQ6h6NmjdUqC/view?usp=share_link"
          project_img="refugeeone"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "Our Solution": "Lorem ipsum 2",
            "My Role": "Lorem Ipsum 3",
          }}
        />
        <ProjectCard
          title="Cryptogods Anubis"
          domains={["Web Design", "Graphic Design", "Web Development"]}
          tech_used={["React", "Netlify", "Figma", "Illustrator"]}
          siteLink="https://cryptogodsanubis.com"
          project_img="cryptogodsanubis"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "Our Solution": "Lorem ipsum 2",
            "My Role": "Lorem Ipsum 3",
          }}
        />
        <ProjectCard
          title="Dusk Security"
          domains={["Logo Design", "Web Design", "Web Development"]}
          tech_used={["GatsbyJS", "React", "Netlify", "Figma", "Illustrator"]}
          designLink="https://www.figma.com/file/v5KjDGjjFHnPV9w22uRkVt/Dusk-Security-Landing-Page?node-id=302%3A1582"
          siteLink="https://dusksecurity.com"
          project_img="dusksecurity"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "Our Solution": "Lorem ipsum 2",
            "My Role": "Lorem Ipsum 3",
          }}
        />
        <ProjectCard
          title="IEEECS-VIT Website"
          domains={["Web Development", "Project Management"]}
          tech_used={["GatsbyJS", "React", "Netlify"]}
          gitLink="https://github.com/IEEECS-VIT/chapter-website-2021"
          siteLink="https://www.ieeecsvit.com"
          project_img="ieeecsvit"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "Our Solution": "Lorem ipsum 2",
            "My Role": "Lorem Ipsum 3",
          }}
        />
        {/* <ProjectCard
          title="MOR TechFab"
          domains={["Web Development", "Project Management"]}
          tech_used={["Mobirise", "Netlify"]}
          siteLink="https://www.mortechfab.com"
          project_img="mortechfab"
        /> */}
        <ProjectCard
          title="Hackbattle '20"
          domains={["Web Development"]}
          tech_used={["JQuery", "FullPageJS", "Netlify"]}
          gitLink="https://github.com/IEEECS-VIT/hackbattle20"
          project_img="hackbattle"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "Our Solution": "Lorem ipsum 2",
            "My Role": "Lorem Ipsum 3",
          }}
        />
        {/* <ProjectCard
          title="Huntr"
          domains={["Combat Robotics"]}
          tech_used={["Arduino", "C++"]}
          gitLink="https://github.com/supraditya/Huntr"
          project_img="github_placeholder"
        /> */}
        {/* <ProjectCard
          title="Fire Detection System"
          domains={["Machine Learning, Image Processing"]}
          tech_used={["Python", "OpenCV"]}
          gitLink="https://github.com/supraditya/FireDetector"
          project_img="github_placeholder"
        /> */}
        <ProjectCard
          title="Portfolio Website"
          domains={["Web Design, Web Development"]}
          tech_used={["GatsbyJS", "React", "Figma", "Illustrator", "Netlify"]}
          gitLink="https://github.com/supraditya/portfolio"
          siteLink="https://www.supraditya.com"
          designLink="https://www.figma.com/file/4pcawtzTmwVTvYit8c3jiU/Portfolio-Site-Design?node-id=0%3A1"
          project_img="portfolio"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "Our Solution": "Lorem ipsum 2",
            "My Role": "Lorem Ipsum 3",
          }}
        />
      </div>
      <div className={styles.chevDiv}>
        <p className={styles.thinWhiteText}>WHAT I CAN DO</p>
        <button onClick={() => scrollTo("#skills")}>
          <span className={styles.icon}>
            <FaChevronDown />
          </span>
        </button>
      </div>
    </div>
  );
};
export default Work;

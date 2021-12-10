import React from "react";
import styles from "./Work.module.css";
// import img from "../../assets/projects/ieeecsvit_ss.png";
// import WorkContainer from "./WorkContainer/WorkContainer";
import ProjectCard from "./ProjectCard/ProjectCard";
// import WorkContainerSite from "./WorkContainer-siteLink/WorkContainerSite";
const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.whiteText}>My Work</div>
      <br></br>
      <div className={styles.projectsOuter}>
        <ProjectCard
          title="Dusk Security"
          domains={[
            "Web Design",
            "Web Development",
          ]}
          tech_used={["GatsbyJS", "React", "Netlify", "Figma", "Illustrator"]}
          designLink="https://www.figma.com/file/v5KjDGjjFHnPV9w22uRkVt/Dusk-Security-Landing-Page?node-id=302%3A1582"
          siteLink="https://dusksecurity.com"
          project_img="dusksecurity"
        />
        <ProjectCard
          title="IEEECS-VIT Website"
          domains={["Web Development", "Project Management"]}
          tech_used={["GatsbyJS", "React", "Netlify"]}
          gitLink="https://github.com/IEEECS-VIT/chapter-website-2021"
          siteLink="https://www.ieeecsvit.com"
          project_img="ieeecsvit"
        />
        <ProjectCard
          title="MOR TechFab"
          domains={["Web Development", "Project Management"]}
          tech_used={["Mobirise", "Netlify"]}
          siteLink="https://mortechfab.com"
          project_img="ieeecsvit"
        />
        <ProjectCard
          title="Hackbattle '20"
          domains={["Web Development"]}
          tech_used={["JQuery", "FullPageJS", "Netlify"]}
          gitLink="https://github.com/IEEECS-VIT/hackbattle20"
          siteLink="https://hackbattle.ieeecsvit.com"
          project_img="ieeecsvit"
        />
        <ProjectCard
          title="Huntr"
          domains={["Combat Robotics"]}
          tech_used={["Arduino", "C++"]}
          gitLink="https://github.com/supraditya/Huntr"
          // siteLink="https://hackbattle.ieeecsvit.com"
          project_img="ieeecsvit"
        />
        <ProjectCard
          title="Fire Detection System"
          domains={["Machine Learning, Image Processing"]}
          tech_used={["Python", "OpenCV"]}
          gitLink="https://github.com/supraditya/FireDetector"
          // siteLink="https://hackbattle.ieeecsvit.com"
          project_img="ieeecsvit"
        />
      </div>
    </div>
  );
};
export default Work;

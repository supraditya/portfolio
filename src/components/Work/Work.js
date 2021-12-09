import React from "react";
import styles from "./Work.module.css";
// import WorkContainer from "./WorkContainer/WorkContainer";
import ProjectCard from "./ProjectCard/ProjectCard";
// import WorkContainerSite from "./WorkContainer-siteLink/WorkContainerSite";
const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.whiteText}>My Work</div>
      <br></br>
      {/* <WorkContainerSite
        title="IEEECS-VIT Website"
        desc="Landing Page for IEEECS-VIT, a technical Student Organisation operating from VIT Vellore. Developed using GatsbyJS. Hosted at ieeecsvit.com"
        link="https://github.com/IEEECS-VIT/chapter-website-2021"
        link2="https://www.ieeecsvit.com"
      /> */}
      <ProjectCard
        title="IEEECS-VIT Website"
        desc="Landing Page for IEEECS-VIT"
        domains={['Web Development', 'Project Management']}
      />
      {/* <WorkContainerSite
        title="HackBattle '20"
        desc="Landing Page for Hackbattle '20, a 36-Hour Multidisciplinary Hackathon. Hosted at hackbattle.ieeecsvit.com"
        link="https://github.com/IEEECS-VIT/HackBattle20"
        link2="https://hackbattle.ieeecsvit.com"
      />
      <WorkContainerSite
        title="MOR TechFab"
        desc="Website for MOR TechFab, a fabrics company based in Gujarat that manufactures PP/HDPE Fabric and Woven Sack bags."
        link2="https://www.mortechfab.com"
        spl="onlySite"
      />
      <WorkContainer
        title="Huntr"
        desc="Huntr is the product of a combat robotics project, developed as an entry for the Robowars tournament organized in VIT, Vellore by RoboVITics, in the 30kg category."
        link="https://github.com/supraditya/Huntr"
      />
      <WorkContainer
        title="Surya NestBuild"
        desc="Redesigned views for the Surya Nestbuild Ltd.'s website."
        link="https://github.com/supraditya/suryaRealEstate"
      />
      <WorkContainer
        title="Fire Detection System"
        desc="A CNN Model trained on a dataset of images containing fire, using our pre-processing algorithm that increases real-time flame detection accuracy by almost 12%"
        link="https://github.com/supraditya/FireDetector"
      /> */}
    </div>
  );
};
export default Work;

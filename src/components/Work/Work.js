import React, { useState } from "react";
import styles from "./Work.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { FaChevronDown } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll";
// import WorkContainerSite from "./WorkContainer-siteLink/WorkContainerSite";
const Work = (props) => {
  const [seeMoreState, setseeMoreState] = useState(false);
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
            "The Problem":
              "Household food wastage has been a significant problem globally. According to the American Journal of Agricultural Economics, the average American household ends up wasting up to 31.9% of the food they purchase! This is caused in part due to the amount of mental effort required in keeping track of household food inventory so that everything is used up before it expires and the amount of time and effort it takes to meal-plan and determine the dish that tastes good, is easy to prepare, and uses an adequate amount of ingredients. Thus, we wondered how we might help people to safely consume all the highly perishable foods in their pantry without wastage, while simultaneously alleviating them of some of the mental burden of managing a household?",
            "My Role":
              "I worked on this Interaction Design with two other teammates. My teammates were focused on the UX Research aspect of the project, while I was the primary UX Designer and developed the majority of the prototype after all feedback was interpreted and consolidated by the team as a whole.",
            "Our Solution":
              "This conundrum led us to come up with Forgetful Foodie: a smartphone application designed to help users consume all their perishable food items before they go bad through individual item age tracking and by suggesting appropriate recipes to tactfully use at-risk ingredients!",
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
            "The Task": "To develop a brand image and relevant promotional and print content for Dr Menon's Palliative Care: a geriatric rehabilitation center based in Thane, India.",
            "My Role": "I was the sole designer and researcher for this project. The logo ideation, branding and media has all been created by me.",
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
            "The Problem": "A key aspect of RefugeeOne's activities is the process of matching their clients i.e. refugees to relevant job opportunities based on job location, pay, the number of dependents that each client has etc. However, there was no way for the organization member to efficiently sift through all the job listings, which led to a lot of mental overhead and frustration for the organization.",
            "My Role": "I was a part of a five-member team tasked with this problem. I was the sole member in the team with significant freelance web and application development experience, and thus I played a big part in the drafting of our eventual solution. I also conducted stakeholder interviews, analysed excerpts and co-created an affinity wall to draw better insights.",
            "Our Solution": "We identified that a more in-depth application of Google Workspace, complete with its automation-friendly scripting and spreadsheet formulas was the ideal way for RefugeeOne to go. Given their limited budget and time constraint, we suggested hiring a Google Apps Script developer for a one-time feature addition to their currently existing database. Our long-term solution consisted of a full-stack dedicated web application for this process, which requires a greater investment of capital and time, along with occasional maintenance overheads.",
          }}
        />
        <ProjectCard
          title="Cryptogods Anubis"
          domains={["Web Design", "Graphic Design", "Web Development"]}
          tech_used={["React", "Netlify", "Figma", "Illustrator"]}
          siteLink="https://cryptogodsanubis.netlify.app"
          project_img="cryptogodsanubis"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Cryptogods Anubis is an NFT project founded in 2022. They required a new landing page, along with a minting website for their token. Two websites, one database application to keep track of minted tokens, and several graphic assets were developed for the team during this project.",
            "My Role": "I was the sole developer working on this project. The NFT collection itself had been created by a different artist. However, all assets for the websites were created by me.",
          }}
        />
        <div className={styles.seeMoreContainer}>
          <button
            aria-label="toggle see more or less projects"
            className={styles.actionButtons}
            onClick={() => setseeMoreState(!seeMoreState)}
          >SEE&nbsp;{seeMoreState ? <span>LESS</span> : <span>MORE</span>}&nbsp;PROJECTS
          </button>
        </div>
        {seeMoreState ? (
          <div className={styles.moreProjectsContainer}>
            <ProjectCard
              title="Dusk Security"
              domains={["Logo Design", "Web Design", "Web Development"]}
              tech_used={[
                "GatsbyJS",
                "React",
                "Netlify",
                "Figma",
                "Illustrator",
              ]}
              designLink="https://www.figma.com/file/v5KjDGjjFHnPV9w22uRkVt/Dusk-Security-Landing-Page?node-id=302%3A1582"
              siteLink="https://dusksecurity.com"
              project_img="dusksecurity"
              setbodyScrollState={props.setbodyScrollState}
              modalContent={{
                "The Task": "Dusk Security is a cybersecurity firm based in Jammu, India. Then being a recently created start-up, the firm needed a new logo, a landing page and an internal full-stack web application for shipment tracking.",
                "My Role": "This was a project that I led as the Projects Head of IEEE-CS VIT. I was the sole designer working on the logo ideation and design, and the landing page design. I then supervised the development of the landing page and application, and reviewed updates and changes, all while providing feedback, and sourcing the same from our clients.",
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
                "The Task": "IEEE-CS VIT's previous landing page needed significant updates. Having been developed using JQuery and Embedded JavaScript, we sought to use this project as a learning opportunity for the team to explore newer technical stacks for web development, such as GatsbyJS and React.",
                "My Role": " I was the Projects Head and led a team of 7 developers, all of whom collaborated and iteratively worked on the design co-developed by the Design Head of IEEE-CS VIT and I.",
              }}
            />
          </div>
        ) : (
          <span></span>
        )}
        {/* <ProjectCard
          title="MOR TechFab"
          domains={["Web Development", "Project Management"]}
          tech_used={["Mobirise", "Netlify"]}
          siteLink="https://www.mortechfab.com"
          project_img="mortechfab"
        /> */}
        {/* <ProjectCard
          title="Hackbattle '20"
          domains={["Web Development"]}
          tech_used={["JQuery", "FullPageJS", "Netlify"]}
          gitLink="https://github.com/IEEECS-VIT/hackbattle20"
          project_img="hackbattle"
          setbodyScrollState={props.setbodyScrollState}
          modalContent={{
            "The Problem": "Lorem ipsum 1",
            "My Role": "Lorem Ipsum 2",
            "Our Solution": "Lorem ipsum 3",
          }}
        /> */}
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
        {/* <ProjectCard
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
            "My Role": "Lorem Ipsum 2",
            "Our Solution": "Lorem ipsum 3",
          }}
        /> */}
      </div>
      <div className={styles.chevDiv}>
        <p className={styles.thinWhiteText}>WHAT I CAN DO</p>
        <button aria-label="scroll to skills and experience" onClick={() => scrollTo("#skills")}>
          <span className={styles.icon}>
            <FaChevronDown />
          </span>
        </button>
      </div>
    </div>
  );
};
export default Work;

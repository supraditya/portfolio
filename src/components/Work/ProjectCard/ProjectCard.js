import React from "react";
import styles from "./ProjectCard.module.css";
import { FaGithub, FaGlobe } from "react-icons/fa";
import bg from '../../../assets/projects/ieeecsvit_ss.png';

const ProjectCard = (props) => {
  const bgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  };
  return (
    <div
      className={styles.outer}
      style={bgStyle}
    >
      <p className={styles.title}>{props.title}</p>
      <div className={styles.domainsOuter}>
        {props.domains.map((domain, index) => {
          if (props.domains.length !== index + 1) {
            return (
              <span className={styles.domain} key={index}>
                {domain},{" "}
              </span>
            );
          } else {
            return (
              <span className={styles.domain} key={index}>
                {domain}
              </span>
            );
          }
        })}
      </div>

      <div className={styles.chipsOuter}>
        {props.tech_used.map((tech, index) => {
          return (
            <span className={styles.techChip} key={index}>
              {tech}
            </span>
          );
        })}
      </div>
      <div className={styles.buttonsOuter}>
        <a className={styles.actionButtons} href={props.siteLink}>
          <FaGlobe size="16px" />
          &ensp;VIEW
        </a>
        <a className={styles.actionButtons} href={props.gitLink}>
          <FaGithub size="16px" />
          &ensp;SOURCE
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;

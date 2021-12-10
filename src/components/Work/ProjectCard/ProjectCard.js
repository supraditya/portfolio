import React from "react";
import styles from "./ProjectCard.module.css";
import { FaGithub, FaGlobe, } from "react-icons/fa";
import {CgFigma} from "react-icons/cg";

const ProjectCard = (props) => {
  return (
    <div className={styles.outer}>
      <img
        src={require(`../../../assets/projects/${props.project_img}_ss.png`)}
        className={styles.projectsCardBg}
        alt="Projects"
      ></img>
      <div className={styles.cardContent}>
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
          {props.siteLink !== undefined ? (
            <a className={styles.actionButtons} href={props.siteLink} target="_blank" rel="noreferrer">
              <FaGlobe size="16px" />
              &ensp;VIEW
            </a>
          ) : (
            <span></span>
          )}
          {props.gitLink !== undefined ? (
            <a className={styles.actionButtons} href={props.gitLink} target="_blank" rel="noreferrer">
              <FaGithub size="16px" />
              &ensp;SOURCE
            </a>
          ) : (
            <span></span>
          )}
          {props.designLink !== undefined ? (
            <a className={styles.actionButtons} href={props.designLink} target="_blank" rel="noreferrer">
              <CgFigma size="16px" />
              &ensp;DESIGN
            </a>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

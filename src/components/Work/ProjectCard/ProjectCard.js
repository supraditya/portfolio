import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { FaGithub, FaGlobe, FaGoogleDrive } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: "solid 2px #777",
    maxWidth: "85%",
    display: "flex",
    flexDirection: "column",
    padding: 0,
    alignItems: "center",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
    color: "#FFF",
    boxShadow: "0 2px 2px #000",
    maxHeight: "90vh",
    overflowY: "scroll",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: "200",
  },
};

// Project images are 1920x1080. 150% zoom. https://www.site-shot.com/

const ProjectCard = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    props.setbodyScrollState(true)
  }

  function closeModal() {
    setIsOpen(false);
    props.setbodyScrollState(false);
  }
  return (
    <div className={styles.outer}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.modalHeaderContainer}>
          <h3 className={styles.modalHeader}>{props.title}</h3>
          <button className={styles.modalCloseButton} onClick={closeModal}>
            CLOSE
          </button>
        </div>
        {props.project_img !== "github_placeholder" ? (
          <img
            src={require(`../../../assets/projects/${props.project_img}_ss.png`)}
            className={styles.modalCardImage}
            alt="Projects"
          ></img>
        ) : (
          <img
            src={require(`../../../assets/projects/${props.project_img}_ss.svg`)}
            className={styles.modalCardImage}
            alt="Projects"
          ></img>
        )}
        <p className={styles.modalText}>
          Dolor irure ad magna exercitation adipisicing nulla nostrud. In
          pariatur ullamco ea dolore laboris sint sunt deserunt consectetur amet
          anim elit Lorem veniam. Dolor minim dolor duis anim aliqua. Consequat
          nulla ad pariatur exercitation amet ex duis in exercitation. Ex culpa
          enim magna incididunt velit esse sint laboris Lorem non anim sint
          irure. Dolor deserunt duis exercitation non adipisicing aliqua quis
          mollit id ut. Dolore incididunt velit commodo quis eiusmod aute tempor
          ea laboris reprehenderit voluptate minim ad exercitation.Eiusmod in
          amet quis ipsum. Dolore et labore exercitation ad. Reprehenderit
          eiusmod ut deserunt proident sunt incididunt mollit. Aute non
          consectetur consequat sint Lorem quis duis deserunt excepteur sunt.
          Elit ipsum esse sunt ex nostrud nisi labore qui duis anim cupidatat.
        </p>
        <div className={styles.modalButtonsOuter}>
          {props.siteLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.siteLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe size="16px" />
              &ensp;WEBSITE
            </a>
          ) : (
            <span></span>
          )}
          {props.gitLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.gitLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="16px" />
              &ensp;SOURCE
            </a>
          ) : (
            <span></span>
          )}
          {props.designLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.designLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgFigma size="16px" />
              &ensp;DESIGN
            </a>
          ) : (
            <span></span>
          )}
          {props.protoLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.protoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgFigma size="16px" />
              &ensp;PROTOTYPE
            </a>
          ) : (
            <span></span>
          )}
          {props.reportLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.reportLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogleDrive size="16px" />
              &ensp;SUMMARY
            </a>
          ) : (
            <span></span>
          )}
        </div>
      </Modal>
      {props.project_img !== "github_placeholder" ? (
        <img
          src={require(`../../../assets/projects/${props.project_img}_ss.png`)}
          className={styles.projectsCardBg}
          alt="Projects"
        ></img>
      ) : (
        <img
          src={require(`../../../assets/projects/${props.project_img}_ss.svg`)}
          className={styles.projectsCardPlaceholderBg}
          alt="Projects"
        ></img>
      )}
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
          <button className={styles.actionButtons} onClick={openModal}>
            VIEW
          </button>
          {props.siteLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.siteLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe size="16px" />
              &ensp;WEBSITE
            </a>
          ) : (
            <span></span>
          )}
          {props.gitLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.gitLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="16px" />
              &ensp;SOURCE
            </a>
          ) : (
            <span></span>
          )}
          {props.designLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.designLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgFigma size="16px" />
              &ensp;DESIGN
            </a>
          ) : (
            <span></span>
          )}
          {props.protoLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.protoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgFigma size="16px" />
              &ensp;PROTOTYPE
            </a>
          ) : (
            <span></span>
          )}
          {props.reportLink !== undefined ? (
            <a
              className={styles.actionButtons}
              href={props.reportLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogleDrive size="16px" />
              &ensp;SUMMARY
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

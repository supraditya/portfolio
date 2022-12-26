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
    props.setbodyScrollState(true);
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
          <button
            aria-label="close details window"
            className={styles.modalCloseButton}
            onClick={closeModal}
          >
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
        {Object.keys(props.modalContent).map((title) => {
          return (
            <div className={styles.modalContentContainer}>
              <p className={styles.modalTextHeader}>{title}</p>
              <p className={styles.modalTextBody}>
                {props.modalContent[title]}
              </p>
            </div>
          );
        })}
        <div className={styles.modalButtonsOuter}>
          {props.siteLink !== undefined ? (
            <a
              name="link-to-website"
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
              name="link-to=source-code"
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
            name="link-to-figma-design"
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
            name="link-to-figma-prototype"
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
          <button
            aria-label="view project details"
            className={styles.actionButtons}
            onClick={openModal}
          >
            DETAILS
          </button>
          {props.siteLink !== undefined ? (
            <a
            name="link-to-website"
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
              name="link-to-project-source"
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
            name="link-to-figma-design"
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
            name="link-to-figma-prototype"
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
            name="link-to-project-summary"
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

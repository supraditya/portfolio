import React, {useState} from "react";
import styles from "./ProjectCard.module.css";
import { FaGithub, FaGlobe, FaGoogleDrive } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000',
    color: '#FFF',
    boxShadow: '0 2px 2px #ddd',
  },
};

// Project images are 1920x1080. 150% zoom. https://www.site-shot.com/

const ProjectCard = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.outer}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 className={styles.modalHeader}>Hello</h3>
        <div>I am a modal</div>
        <p>Culpa officia quis magna enim mollit.</p>
        <button className={styles.actionButtons} onClick={closeModal}>CLOSE</button>
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

            className={styles.actionButtons}
            onClick={openModal}
          >
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

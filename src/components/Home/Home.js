import React from "react";
import styles from "./Home.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaChevronDown,
  FaGoogleDrive,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import scrollTo from "gatsby-plugin-smoothscroll";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.textDiv}>
        <p className={styles.whiteText} style={{ marginLeft: "1.5%" }}>
          Hi, I'm <br></br>
          <span className={styles.orangeTextLarge}>Aditya Menon</span>
        </p>
        <p className={styles.whiteTextLarge}>
          Designer, Developer, Researcher.
        </p>
        <div className={styles.chevDiv}>
          <button aria-label="scroll to my work" onClick={() => scrollTo("#work")}>
            <span className={styles.icon}>
              <FaChevronDown size="70px" />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.linkButtons}>
          <a
            name="linkedin-link"
            href="https://www.linkedin.com/in/supraditya"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.icon}>
              <FaLinkedin />
            </span>
          </a>
          <a
            name="github-link"
            href="https://www.github.com/supraditya"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.icon}>
              <FaGithub />
            </span>
          </a>
          <a
            name="mailto-link"
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=aditya300100@gmail.com&tf=1"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.icon}>
              <IoMail />
            </span>
          </a>
        </div>
        <a
          name="resume-link"
          href="https://drive.google.com/file/d/15YoyQ6_rX_M6DfdbvzvY7wfcpzu8SVnM/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className={styles.buttonStyle}
        >
          <FaGoogleDrive />
          &ensp;VIEW RESUME
        </a>
        <div style={{ marginBottom: "3%" }}></div>
        <button
          aria-label="jump to my work"
          className={styles.workLink}
          onClick={() => scrollTo("#work")}
        >
          Jump to My Work
        </button>
      </div>
      <button
        aria-label="scroll to my work"
        className={styles.mobileChevDiv}
        onClick={() => scrollTo("#work")}
      >
        <span className={styles.icon}>
          <FaChevronDown size="60px" />
        </span>
      </button>
    </div>
  );
};
export default Home;

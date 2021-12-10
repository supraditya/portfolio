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
        <p className={styles.whiteText}>
          Hi, I'm <br></br>
          <span className={styles.orangeTextLarge}>Aditya Menon</span>
        </p>
        <p className={styles.whiteTextLarge}>Frontend Web Developer</p>
        <div className={styles.chevDiv}>
          <button onClick={() => scrollTo("#about")}>
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
          href="https://drive.google.com/file/d/1p6xn7z-pMwWohuOetHgjYxfQTPANwvNk/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={styles.buttonStyle}
        >
          <FaGoogleDrive />
          &ensp;VIEW RESUME
        </a>
      </div>
      <button
        className={styles.mobileChevDiv}
        onClick={() => scrollTo("#about")}
      >
        <span className={styles.icon}>
          <FaChevronDown size="60px" />
        </span>
      </button>
    </div>
  );
};
export default Home;

import React, { useState, useEffect } from "react";
import styles from "../components/index.module.css";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  // Used to keep track of whether body scroll needs to be set to 'scroll' or hidden, for modal UX
  const [bodyScrollState, setbodyScrollState] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    if (bodyScrollState) {
      body.style.overflowY = "hidden";
      body.style.paddingRight = "15px";
    } else {
      body.style.overflowY = "scroll";
      body.style.paddingRight = "0px";
    }
  }, [bodyScrollState]);

  return (
    <div className={styles.main}>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://www.supraditya.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.supraditya.com/my-logo-share-preview.png"
        />
        <title>Aditya Menon</title>
        <meta
          name="description"
          content="I am a Web Developer &amp; a UI/UX Designer, and this is my Portfolio Site."
        ></meta>
        <meta
          name="keywords"
          content="Aditya, Menon, Aditya Menon, supraditya, Supraditya, Web Developer, Frontend Web Developer, IEEECS, IEEE-CS, IEEE Computer Society VIT, VIT, IEEE CS VIT, Frontend Web Development, freehongkong, 4/6/1989, pooh"
        ></meta>
        <meta property="og:title" content="Aditya Menon" />
        <meta
          property="og:description"
          content="I am a Web Developer &amp; a UI/UX Designer, and this is my Portfolio Site."
        />
      </Helmet>
      <Sidebar />
      <div className={styles.homeContainer}>
        <div id="home">
          <Home />
        </div>
        <div id="work" className={styles.work}>
          <Work setbodyScrollState={setbodyScrollState} />
        </div>
        <div id="skills" className={styles.exp}>
          <Skills />
        </div>
        <div id="about" className={styles.about}>
          <About />
        </div>
      </div>
      <div className={styles.skillsWorkFooterContainer}>
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <a
              name="linkedin-link"
              href="https://www.linkedin.com/in/supraditya"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon}>
                <FaLinkedin size="30px" />
              </span>
            </a>
            <a
              name="github-link"
              href="https://www.github.com/supraditya"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon}>
                <FaGithub size="30px" />
              </span>
            </a>
            <a
              name="mailto-link"
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=aditya300100@gmail.com&tf=1"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon}>
                <IoMail size="30px" />
              </span>
            </a>
            <a
              name="instagram-link"
              href="https://www.instagram.com/menon_aa_gaya/"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon}>
                <FaInstagram size="30px" />
              </span>
            </a>
            <a
            name="youtube-link"
              href="https://www.youtube.com/channel/UC4J1TSccU4G_CriLC9eoAQw"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon}>
                <FaYoutube size="30px" />
              </span>
            </a>
            <a
              name="soundcloud-link"
              href="https://soundcloud.com/p-r-y-m-e-v-i-l"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon}>
                <FaSoundcloud size="30px" />
              </span>
            </a>
          </div>
          <p>
            Made with&nbsp;
            <span role="img" aria-label="heart-emoji">
              ❤️
            </span>
            &nbsp;by&nbsp;
            <span className={styles.orangeText}>Aditya Menon</span> (supraditya)
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

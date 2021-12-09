import * as React from "react";
import styles from "../components/index.module.css";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  FaLinkedin,
  FaGithub,
  FaChevronDown,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Helmet } from "react-helmet";

const fav = {
  image: require("../assets/my-logo-fav.png"),
};

const IndexPage = () => {
  return (
    <div className={styles.main}>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Aditya Menon</title>
        <meta
          name="description"
          content="My name is Aditya Menon. I am a Web Developer &amp; a UI/UX Designer, and this is my Portfolio Site."
        ></meta>
        <meta
          name="keywords"
          content="Aditya, Menon, Aditya Menon, supraditya, Supraditya, Web Developer, Frontend Web Developer, IEEECS, IEEE-CS, IEEE Computer Society VIT, VIT, IEEE CS VIT, Frontend Web Development, freehongkong, 4/6/1989, pooh"
        ></meta>
        <meta
          property="og:title"
          content="Aditya Menon, Web Developer and Designer"
        />
        <meta
          property="og:description"
          content="My name is Aditya Menon. I am a Web Developer &amp; a UI/UX Designer, and this is my Portfolio Site."
        />
        <meta property="og:url" content="https://www.supraditya.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={fav.image} />
      </Helmet>
      <Sidebar />
      <div id="home">
        <Home />
      </div>
      <div id="about" className={styles.about}>
        <About />
      </div>
      <div className={styles.skillsWorkFooterContainer}>
        <div id="skills" className={styles.exp}>
          <Skills />
          <div className={styles.chevDiv2}>
            <p className={styles.thinWhiteText}>SOME STUFF I'VE MADE</p>
            <button onClick={() => scrollTo("#work")}>
              <span className={styles.icon}>
                <FaChevronDown size="70px" />
              </span>
            </button>
          </div>
        </div>
        <div id="work" className={styles.work}>
          <Work />
        </div>
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
              href="https://www.instagram.com/menon_aa_gaya/"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon}>
                <FaInstagram size="30px" />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UC4J1TSccU4G_CriLC9eoAQw"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.icon}>
                <FaYoutube size="30px" />
              </span>
            </a>
            <a
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
            Made (<span role="img" aria-label="heart-emoji">❤️</span> is for nerds) by{" "}
            <span className={styles.orangeText}>Aditya Menon</span> (supraditya)
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

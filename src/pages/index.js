import * as React from "react"
import styles from "../components/index.module.css";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from '../components/Work/Work';
import Sidebar from '../components/Sidebar/Sidebar';
import { FaLinkedin, FaGithub, FaChevronDown} from 'react-icons/fa';
import {IoMail} from 'react-icons/io5';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Helmet } from "react-helmet";

const IndexPage=()=>{
  return(
    <div className={styles.main}>
      <Helmet>
          <meta charSet="UTF-8" />
          <title>Aditya Menon</title>
          <meta name="description" content="My name is Aditya Menon and I am a Frontend Web Developer and a UI/UX Designer. This is my Portfolio Site."></meta>
          <meta name="keywords" content="Aditya, Menon, Aditya Menon, Web Developer, Frontend Web Developer, IEEECS, IEEE Computer Soceity VIT, VIT, IEEE CS VIT, Frontend Wed Development"></meta>
      </Helmet>
      <Sidebar/>
      <div id="home">
        <Home/>
      </div>
      <div id="about" className={styles.about}>
        <About/>
      </div>
      <div id="skills" className={styles.exp}>
        <Skills/>
        <div className={styles.chevDiv2}>
          <p className={styles.thinWhiteText}>SOME STUFF I'VE MADE</p>
          <button onClick={() => scrollTo('#work')}><span className={styles.icon}><FaChevronDown size="70px"/></span></button>
        </div>
      </div>
      <div id="work" className={styles.work}>
        <Work/>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
        <a name="linkedin-link" href="https://www.linkedin.com/in/supraditya" target="_blank" rel="noreferrer">
              <span className={styles.icon}>
                <FaLinkedin size="40px"/>
              </span>
            </a>
            <a name="github-link" href="https://www.github.com/supraditya" target="_blank" rel="noreferrer">
              <span className={styles.icon}>
                <FaGithub size="40px"/>
              </span>
            </a>
            <a name="mailto-link" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=aditya300100@gmail.com&tf=1" target="_blank" rel="noreferrer">
              <span className={styles.icon}>
                <IoMail size="40px"/>
              </span>
            </a>
        </div>
        <p>Made with ❤️ (and 💅) by <span className={styles.orangeText}>Aditya Menon</span> (supraditya)</p>
      </div>
    </div>

  )
}

export default IndexPage

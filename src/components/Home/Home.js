import React from 'react';
import styles from "./Home.module.css";
import { FaLinkedin, FaGithub, FaChevronDown, FaGoogleDrive } from 'react-icons/fa';
import {IoMail} from 'react-icons/io5';
import scrollTo from 'gatsby-plugin-smoothscroll';
const Home=()=>{
    return(
        <div className={styles.home}>
        <div>
        <p className={styles.whiteText}>Hi, I'm <br></br><span className={styles.orangeTextLarge}>Aditya Menon</span></p>
        <p className={styles.whiteTextLarge}>Frontend Web Developer</p>
        <div className={styles.chevDiv}>
          <a onClick={() => scrollTo('#about')}><span className={styles.icon}><FaChevronDown size="70px"/></span></a>
        </div>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.linkButtons}>
          {/* <a href="tel:7738014883">
            <span className={styles.icon}>
            <FaPhoneAlt size="45px"/>
            </span>
          </a> */}
          <a href="https://www.linkedin.com/in/supraditya" target="_blank" rel="noreferrer">
            <span className={styles.icon}>
              <FaLinkedin size="50px"/>
            </span>
          </a>
          <a href="https://www.github.com/supraditya" target="_blank" rel="noreferrer">
            <span className={styles.icon}>
              <FaGithub size="50px"/>
            </span>
          </a>
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=aditya300100@gmail.com&tf=1" target="_blank" rel="noreferrer">
            <span className={styles.icon}>
              <IoMail size='55px'/>
            </span>
          </a>
          </div>
          <a 
          href="https://drive.google.com/file/d/1QuiHhxFY7Xvqwhe3znrNz9iwJAqafh7A/view?usp=sharing" 
          target="_blank" rel="noreferrer" className={styles.buttonStyle}>
            <FaGoogleDrive size='40px' />&ensp;VIEW RESUME
          </a>
        </div>
      </div>
    )
}
export default Home;
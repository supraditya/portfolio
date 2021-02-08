import * as React from "react"
import styles from "../components/index.module.css";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from '../components/Work/Work';
import {FaChevronDown} from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';


const IndexPage=()=>{
  return(
    <div className={styles.main}>
      <Home/>
      <div id="about" className={styles.about}>
        <About/>
      </div>
      <div id="skills" className={styles.exp}>
        <Skills/>
        <div className={styles.chevDiv}>
          <p className={styles.thinWhiteText}>SOME STUFF I'VE MADE</p>
          <button onClick={() => scrollTo('#work')}><span className={styles.icon}><FaChevronDown size="70px"/></span></button>
        </div>
      </div>
      <div id="work" className={styles.work}>
        <Work/>
      </div>
    </div>

  )
}

export default IndexPage

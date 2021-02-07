import * as React from "react"
import styles from "../components/index.module.css";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

const IndexPage=()=>{
  return(
    <div className={styles.main}>
      <Home/>
      <div id="about" className={styles.about}>
        <About/>
      </div>
      <div id="skills" className={styles.exp}>
        <Skills/>
      </div>
      <div className={styles.work}>
        <h1 className={styles.whiteText}>My Work</h1>
      </div>
    </div>

  )
}

export default IndexPage

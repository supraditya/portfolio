import * as React from "react"
import styles from "../components/index.module.css";
import Home from "../components/Home/Home";

const IndexPage=()=>{
  return(
    <div className={styles.main}>
      <Home/>
      <div id="about" className={styles.about}>
        <h1 className={styles.whiteText}>Who Am I?</h1>
      </div>
      <div className={styles.exp}>
        <h1 className={styles.whiteText}>Skills</h1>
      </div>
      <div className={styles.work}>
        <h1 className={styles.whiteText}>My Work</h1>
      </div>
    </div>

  )
}

export default IndexPage

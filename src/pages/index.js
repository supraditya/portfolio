import * as React from "react"
import styles from "../components/index.module.css";

const IndexPage=()=>{
  return(
    <div className={styles.main}>
      <div className={styles.home}>
        <h1 className={styles.whiteText}>Frontend Web Developer</h1>
      </div>
      <div className={styles.about}>
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

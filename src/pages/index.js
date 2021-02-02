import * as React from "react"
import styles from "../components/index.module.css";

const IndexPage=()=>{
  return(
    <div className={styles.main}>
      <div className={styles.home}>
        <div>
        <p className={styles.whiteText}>Hi, I'm <br></br><span className={styles.orangeTextLarge}>Aditya Menon</span></p>
        <p className={styles.whiteTextLarge}>Frontend Web Developer</p>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.linkButtons}>
          <a><img src={require('../assets/phone.svg')}/></a>
          <a href="https://www.linkedin.com/in/supraditya" target="_blank"><img src={require('../assets/linkedin.svg')}/></a>
          <a href="https://www.github.com/supraditya" target="_blank"><img src={require('../assets/github.svg')}/></a>
          <a><img src={require('../assets/email.svg')}/></a>
          </div>
          <a href="https://drive.google.com/file/d/1QuiHhxFY7Xvqwhe3znrNz9iwJAqafh7A/view?usp=sharing" target="_blank" className={styles.buttonStyle}><img src={require('../assets/gdrive.svg')}/>&ensp;VIEW RESUME</a>
        </div>
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

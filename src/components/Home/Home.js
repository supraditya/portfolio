import React from 'react';
import styles from "./Home.module.css";
const Home=()=>{
    return(
        <div className={styles.home}>
        <div>
        <p className={styles.whiteText}>Hi, I'm <br></br><span className={styles.orangeTextLarge}>Aditya Menon</span></p>
        <p className={styles.whiteTextLarge}>Frontend Web Developer</p>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.linkButtons}>
          <a><img src={require('../../assets/phone.svg')}/></a>
          <a href="https://www.linkedin.com/in/supraditya" target="_blank"><img src={require('../../assets/linkedin.svg')}/></a>
          <a href="https://www.github.com/supraditya" target="_blank"><img src={require('../../assets/github.svg')}/></a>
          <a><img src={require('../../assets/email.svg')}/></a>
          </div>
          <a href="https://drive.google.com/file/d/1QuiHhxFY7Xvqwhe3znrNz9iwJAqafh7A/view?usp=sharing" target="_blank" className={styles.buttonStyle}><img src={require('../../assets/gdrive.svg')}/>&ensp;VIEW RESUME</a>
        </div>
      </div>
    )
}
export default Home;
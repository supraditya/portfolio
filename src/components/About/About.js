import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutLeft}>
        <h1 className={styles.whiteTextHeader}>
          Who Am <span className={styles.orangeTextHeader}>I</span>?
        </h1>
        <p className={styles.whiteText}>
          I, <span className={styles.orangeText}>Aditya Menon</span>, am a First
          Year Graduate student studying UI/UX Design and User-Centered Agile Development at the University of Michigan.<br></br>
          <br></br> I have been working as a self-taught Frontend Web Developer
          and Designer for over <span className={styles.orangeText}>3</span>
          &nbsp;years and have completed several internships, along with some projects
          for my former Student Organisation:&nbsp;
          <span className={styles.orangeText}>IEEE-CS VIT</span>.<br></br>
          <br></br> Apart from Web Development, I occasionally produce music,
          sketch comedy and standups since you either gotta be funny or
          good-looking (I'm neither)
        </p>
      </div>
    </div>
  );
};
export default About;

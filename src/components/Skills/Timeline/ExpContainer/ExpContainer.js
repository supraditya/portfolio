import React from "react";
import styles from "./ExpContainer.module.css";

const ExpContainer = (props) => {
  return (
    <div className={styles.outer}>
      <div>
        <div className={styles.jobPosition}>Web Developer</div>
        <div className={styles.companyJobType}>
          <span>Mathrithms</span>
          <span className={styles.companyJobSeparator}></span>
          <span>Internship</span>
        </div>
        <p className={styles.jobLoc}>Mumbai, India</p>
      </div>
      <p className={styles.jobDate}>AUG 2021 - SEP 2021</p>
    </div>
  );
};
export default ExpContainer;

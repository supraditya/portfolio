import React from "react";
import styles from "./ExpContainer.module.css";

const ExpContainer = (props) => {
  return (
    <div className={styles.outer}>
      <div>
        <div className={styles.jobPosition}>{props.title}</div>
        <div className={styles.companyJobType}>
          <span>{props.company}</span>
          <span className={styles.companyJobSeparator}></span>
          <span>{props.jobtype}</span>
        </div>
        <p className={styles.jobLoc}>{props.city}, {props.country}</p>
      </div>
      <p className={styles.jobDate}>{props.startdate} - {props.enddate}</p>
    </div>
  );
};
export default ExpContainer;

import React from "react";
import styles from "./ExpContainer.module.css";

const ExpContainer = (props) => {
  let expDiv;
  // One position ExpContainer
  if (props.positions === 1) {
    expDiv = (
      <div className={styles.outer}>
        <div>
          <div className={styles.jobPosition}>{props.title}</div>
          <div className={styles.companyJobType}>
            <span>{props.company}</span>
            <span className={styles.companyJobSeparator}></span>
            <span>{props.jobtype}</span>
          </div>
          <p className={styles.jobLoc}>
            {props.city}, {props.country}
          </p>
        </div>
        <p className={styles.jobDate}>
          {props.startdate} - {props.enddate}
        </p>
      </div>
    );
  } else {
    // Multi position expContainer
    let positionsArray = [];
    props.positionlist.forEach((position) => {
      let temp = (
        <div className={styles.companyJobTypeMulti}>
          <span className={styles.companyJobSeparatorMulti}></span>
          <span>{position.title}</span>
          <br></br>
          <p className={styles.jobDateMulti}>
            {position.startdate} - {position.enddate}
          </p>
        </div>
      );
      positionsArray.push(temp);
    });
    expDiv = (
      <div className={styles.outerMulti}>
        <div>
          <div className={styles.jobPosition}>{props.company}</div>
          <div className={styles.companyJobType}>
            <span>{props.jobtype}</span>
          </div>
          <p className={styles.jobLoc}>
            {props.city}, {props.country}
          </p>
        </div>
        <div>
          {/* Printing all positions under a given company */}
          {positionsArray}
        </div>
      </div>
    );
  }
  return <div>{expDiv}</div>;
};
export default ExpContainer;

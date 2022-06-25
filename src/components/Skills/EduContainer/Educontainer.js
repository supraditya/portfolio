import React from "react";
import styles from "./Educontainer.module.css";
const EduContainer = (props) => {
  return (
    <div className={styles.outer}>
      <p className={styles.dateText}>
        {props.start}-{props.end}
      </p>
      <p className={styles.instName}>{props.instName}</p>
      <p className={styles.fact}>{props.fact}</p>
      <p className={styles.fact2}>{props.fact2}</p>
    </div>
  );
};
export default EduContainer;

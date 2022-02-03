import React from "react";
import styles from "./Timeline.module.css";
import { FaChevronDown } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll";
import ExpContainer from "./ExpContainer/ExpContainer";

const Timeline = () => {
  return (
    <div>
      <div className={styles.expContainer}>
        <ExpContainer/>
      </div>
      <div className={styles.chevDivMobile}>
        <p className={styles.thinWhiteText}>SOME STUFF I'VE MADE</p>
        <button onClick={() => scrollTo("#work")}>
          <span className={styles.icon}>
            <FaChevronDown size="70px" />
          </span>
        </button>
      </div>
    </div>
  );
};
export default Timeline;

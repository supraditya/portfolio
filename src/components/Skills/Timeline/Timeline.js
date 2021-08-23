import React from "react";
import styles from "./Timeline.module.css";
import { FaChevronDown } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll";

const Timeline = () => {
  return (
    <div>
      <div className={styles.timeline}>
        <div className={styles.containerRight}>
          <div className={styles.content}>
            <p className={styles.expHeader}>Projects Head</p>
            <p className={styles.expHeader}>IEEE CS, VIT</p>
            <p className={styles.expHeader}>|&nbsp;2018-Present</p>
            <p>
              Current Projects Head @ IEEE Computer Society VIT, a technical
              Student Branch dedicated to the Open Source philosophy of its
              parent organization.
            </p>
          </div>
        </div>
        <div className={styles.containerLeft}>
          <div className={styles.content}>
            <p className={styles.expHeader}>Frontend Web Developer</p>
            <p className={styles.expHeader}>Apli.ai</p>
            <p className={styles.expHeader}>|&nbsp;Aug-Nov 2020</p>
            <p>
              Developed multiple frontend views for Apli.ai, an IIT-B Based
              campus recruitment startup. Most commonly working with Bootstrap
              and JQuery.
            </p>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.content}>
            <p className={styles.expHeader}>Radio Jockey (English)</p>
            <p className={styles.expHeader}>VIT Radio</p>
            <p className={styles.expHeader}>|&nbsp;2018-2020</p>
            <p>
              Former Radio Jockey @ VIT Radio 90.8MHz. Hosted 2 shows and
              mentored junior RJs for the same.{" "}
            </p>
          </div>
        </div>
        <div className={styles.containerLeft}>
          <div className={styles.content}>
            <p className={styles.expHeader}>Frontend Web Developer</p>
            <p className={styles.expHeader}>Surya Group</p>
            <p className={styles.expHeader}>|&nbsp;Jun-Jul 2020</p>
            <p>
              Part of the team tasked with redesigning and redeveloping a
              revised website for Surya NestBuild Ltd., a construction firm
              based in Patna, Bihar.
            </p>
          </div>
        </div>
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

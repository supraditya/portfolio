import React from "react";
import styles from "./Timeline.module.css";
import { FaChevronDown } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll";
import ExpContainer from "./ExpContainer/ExpContainer";

const Timeline = () => {
  return (
    <div>
      <div className={styles.expContainer}>
        {/* Start date of title 1 first, then start date of title 2 */}
        {/* Same for end dates */}
        <ExpContainer
          positions={2}
          positionlist={[
            {
              title: "Projects Head",
              startdate: "DEC 2020",
              enddate: "DEC 2021",
            },
            {
              title: "Core Committee Member",
              startdate: "DEC 2018",
              enddate: "DEC 2020",
            },
          ]}
          company="IEEE Computer Society VIT"
          jobtype="Student Branch"
          city="Vellore"
          country="India"
        />
        <ExpContainer
          positions={1}
          title="Radio Jockey, English Section"
          company="VIT Community Radio 90.8 MHz"
          startdate="DEC 2018"
          enddate="DEC 2021"
          jobtype="Club"
          city="Vellore"
          country="India"
        />
        <ExpContainer
          positions={1}
          title="UI/UX Intern"
          company="Dusk Security"
          startdate="SEP 2021"
          enddate="OCT 2021"
          jobtype="Internship"
          city="Jammu"
          country="India"
        />
        <ExpContainer
          positions={1}
          title="Web Developer"
          company="Mathrithms"
          startdate="AUG 2021"
          enddate="SEP 2021"
          jobtype="Internship"
          city="Mumbai"
          country="India"
        />
        <ExpContainer
          positions={1}
          title="Virtual Research Attachment Trainee"
          company="Universiti Teknologi PETRONAS"
          startdate="JUN 2021"
          enddate="JUL 2021"
          jobtype="Apprenticeship"
          city="Perak"
          country="Malaysia"
        />
        <ExpContainer
          positions={1}
          title="Frontend Web Developer"
          company="Apli"
          startdate="AUG 2020"
          enddate="NOV 2020"
          jobtype="Internship"
          city="Mumbai"
          country="India"
        />
        <ExpContainer
          positions={1}
          title="Frontend Web Developer"
          company="Surya NestBuild Ltd."
          startdate="JUN 2020"
          enddate="JUL 2020"
          jobtype="Freelance"
          city="Patna"
          country="India"
        />
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

import React from "react";
import EduContainer from "./EduContainer/Educontainer";
import Timeline from "./Timeline/Timeline";
import styles from "./Skills.module.css";
import {
  DiPhp,
  DiJqueryLogo,
  DiReact,
  DiPython,
  DiJava,
  DiIllustrator,
  DiBootstrap,
} from "react-icons/di";
import {
  SiJavascript,
  SiMysql,
  SiMicrosoftoffice,
  SiAdobexd,
  SiTailwindcss,
  SiTypescript,
  SiGatsby,
} from "react-icons/si";
import scrollTo from "gatsby-plugin-smoothscroll";
import { FaNodeJs, FaChevronDown } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <div className={styles.skills}>
        <div className={styles.leftDiv}>
          <div className={styles.skillsDiv}>
            <h1 className={styles.whiteText}>Skills</h1>
            <div className={styles.iconDiv}>
              <span className={styles.skillIcon}>
                <DiPhp color="#777BB4" />
              </span>
              <span className={styles.skillIcon}>
                <DiJqueryLogo color="#0769AD" />
              </span>
              <span className={styles.skillIcon}>
                <DiReact color="#61DAFB" />
              </span>
              <span className={styles.skillIcon}>
                <DiPython color="#3776AB" />
              </span>
              <span className={styles.skillIcon}>
                <DiJava color="#007396" />
              </span>
              <span className={styles.skillIcon}>
                <img
                  src={require("../../assets/cLang.svg")}
                  style={{ height: "50px", width: "auto" }}
                  alt="C logo"
                />
              </span>
              <span className={styles.skillIcon}>
                <DiIllustrator color="#FF9A00" />
              </span>
              <span className={styles.skillIcon}>
                <DiBootstrap color="#7952B3" />
              </span>
              <span className={styles.skillIcon}>
                <img
                  src={require("../../assets/Figma.svg")}
                  style={{ height: "50px", width: "auto" }}
                  alt="figma logo"
                />
              </span>
              <span className={styles.skillIcon}>
                <SiJavascript color="#F7DF1E" />
              </span>
              <span className={styles.skillIcon}>
                <SiMysql color="#4479A1" />
              </span>
              <span className={styles.skillIcon}>
                <SiMicrosoftoffice color="#D83B01" />
              </span>
              <span className={styles.skillIcon}>
                <SiAdobexd color="#FB35BE" />
              </span>
              <span className={styles.skillIcon}>
                <FaNodeJs color="#7DB800" />
              </span>
              <span className={styles.skillIcon}>
                <SiTailwindcss color="#38BDF8" />
              </span>
              <span className={styles.skillIcon}>
                <SiTypescript color="#3178C6" />
              </span>
              <span className={styles.skillIcon}>
                <SiGatsby color="#663399" />
              </span>
              <span className={styles.skillIcon}>
                <img
                  style={{ height: "50px", width: "auto" }}
                  src={require("../../assets/flutter.png")}
                  alt="flutter logo"
                />
              </span>
            </div>
          </div>
          <div className={styles.eduDiv}>
            <h1 className={styles.whiteTextEdu}>Education</h1>
            <EduContainer
              start="2022"
              end="NOW"
              fact="MS in Information Studies"
              fact2="GPA: 4.0"
              instName="University of Michigan"
            />
            <EduContainer
              start="2018"
              end="2022"
              fact="Computer Science"
              fact2="CGPA: 8.55/10"
              instName="VIT Vellore"
            />
            {/* <EduContainer
              start="2016"
              end="2018"
              fact="Computer Science"
              fact2="85%"
              instName="PACE Junior Science College"
            />
            <EduContainer
              start="2009"
              end="2016"
              fact="Computer Science"
              fact2="96%"
              instName="Smt. Sulochanadevi Singhania School"
            /> */}
          </div>
        </div>
        <div className={styles.rightDiv}>
          <h1 className={styles.whiteText}>Experience</h1>
          <Timeline />
        </div>
      </div>
      <div className={styles.chevDiv2}>
        <p className={styles.thinWhiteText}>WHO I AM</p>
        <button aria-label="scroll to about me" onClick={() => scrollTo("#about")}>
          <span className={styles.icon}>
            <FaChevronDown size="70px" />
          </span>
        </button>
      </div>
    </div>
  );
};
export default Skills;

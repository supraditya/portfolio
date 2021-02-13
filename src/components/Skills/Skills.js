import React from 'react'
import EduContainer from './EduContainer/Educontainer';
import Timeline from './Timeline/Timeline';
import styles from './Skills.module.css';
import {DiPhp, DiJqueryLogo, DiReact, DiPython, DiJava, DiIllustrator, DiBootstrap} from 'react-icons/di';
import {SiJavascript, SiMysql, SiMicrosoftoffice} from 'react-icons/si';

const Skills=()=>{
    return(
        <div className={styles.skills}>
            <div className={styles.leftDiv}>
                <div className={styles.skillsDiv}>
                    <h1 className={styles.whiteText}>Skills</h1>
                    <div className={styles.iconDiv}>
                    <span className={styles.skillIcon}><DiPhp color= "#777BB4"/></span>
                    <span className={styles.skillIcon}><DiJqueryLogo color="#0769AD"/></span>
                    <span className={styles.skillIcon}><DiReact color="#61DAFB"/></span>
                    <span className={styles.skillIcon}><DiPython color="#3776AB"/></span>
                    <span className={styles.skillIcon}><DiJava color="#007396"/></span>
                    <span className={styles.skillIcon}><img src={require('../../assets/cLang.svg')} alt="C logo" /></span>
                    <span className={styles.skillIcon}><DiIllustrator color="#FF9A00"/></span>
                    <span className={styles.skillIcon}><DiBootstrap color="#7952B3"/></span>
                    <span className={styles.skillIcon}><img src={require('../../assets/Figma.svg')} alt="figma logo" /></span>
                    <span className={styles.skillIcon}><SiJavascript color="#F7DF1E"/></span>
                    <span className={styles.skillIcon}><SiMysql color="#4479A1"/></span>
                    <span className={styles.skillIcon}><SiMicrosoftoffice color="#D83B01"/></span>
                    </div>
                </div>
                <div className={styles.eduDiv}>
                    <h1 className={styles.whiteTextEdu}>Education</h1>
                    <EduContainer start="2018" end="NOW" fact="CGPA(4th Sem): 8.31/10" instName="VIT Vellore"/>
                    <EduContainer start="2016" end="2018" fact="Computer Science: 183/200" instName="PACE Junior Science College"/>
                    <EduContainer start="2009" end="2016" fact="Computer Science: 100/100" instName="Smt. Sulochanadevi Singhania School"/>
                </div>
                {/* <div className={styles.thinWhiteText}>(Scroll Here to See More)</div> */}
            </div>
            <div className={styles.rightDiv}>
                <h1 className={styles.whiteText}>Experience</h1>
                <Timeline/>
            </div>
        </div>
    )
}
export default Skills;
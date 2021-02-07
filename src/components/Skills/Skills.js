import React from 'react'
import EduContainer from './EduContainer/Educontainer';
import styles from './Skills.module.css';


const Skills=()=>{
    return(
        <div className={styles.skills}>
            <div className={styles.leftDiv}>
                <div className={styles.skillsDiv}>
                    <h1 className={styles.whiteText}>Skills</h1>
                </div>
                <div className={styles.eduDiv}>
                    <h1 className={styles.whiteTextEdu}>Education</h1>
                    <EduContainer start="2018" end="NOW" fact="CGPA(4th Sem): 8.31/10" instName="VIT Vellore"/>
                    <EduContainer start="2016" end="2018" fact="Computer Science: 180/200" instName="PACE Junior Science College"/>
                    <EduContainer start="2009" end="2016" fact="Computer Science: 100/100" instName="Smt. Sulochanadevi Singhania School"/>
                </div>
            </div>
        </div>
    )
}
export default Skills;
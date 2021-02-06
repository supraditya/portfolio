import React from 'react'
import EduContainer from './EduContainer/Educontainer';
import styles from './Skills.module.css'

const Skills=()=>{
    return(
        <div className={styles.skills}>
            <h1 className={styles.whiteText}>Skills</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <EduContainer start="2016" end="2018" fact="Computer Science: 180/200" instName="PACE Junior Science College"/>
        </div>
    )
}
export default Skills;
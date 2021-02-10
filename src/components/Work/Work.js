import React from 'react'
import styles from './Work.module.css';
import WorkContainer from './WorkContainer/WorkContainer';
const Work=()=>{
    return(
        <div className={styles.work}>
            <div className={styles.whiteText}>
                My Work
            </div>
            <WorkContainer
                title="HackBattle '20"
                desc="Landing Page for Hackbattle '20, a 36-Hour Multidisciplinary Hackathon. Hosted at hackbattle.ieeecsvit.com"
                link="https://github.com/IEEECS-VIT/HackBattle20"
            />
            <WorkContainer 
            title="Huntr" 
            desc="Huntr is the outcome of a combat robotics project, developed as an entry for the Robowars tournament organized in VIT, Vellore by RoboVITics, in the 30kg category." 
            link="https://github.com/supraditya/Huntr"/>
            <WorkContainer
            title="Surya NestBuild"
            desc="Redesigned views for the Surya Nestbuild Ltd.'s website."
            link="https://github.com/supraditya/suryaRealEstate"
            />
        </div>

    );
}
export default Work;
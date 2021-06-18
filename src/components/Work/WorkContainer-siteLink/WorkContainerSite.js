import React from 'react'
import styles from '../WorkContainer/WorkContainer.module.css';
import {FaGlobe, FaGithub} from 'react-icons/fa';
const WorkContainerSite=(props)=>{
    return(
        <div className={styles.outer}>
            <div className={styles.left}>
                <div className={styles.leftContent}>
                    <div className={styles.contentLeftText}>
                        <p className={styles.orangeText}>{props.title}</p>
                        <p className={styles.whiteText}>{props.desc}</p>
                    </div>
                    <div className={styles.contentLeftButton}>
                        <a href={props.link2} target="_blank" rel="noreferrer"><FaGlobe size="16px"/>&ensp;&nbsp;VIEW&nbsp;&ensp;</a>
                        {/* Does not display second button for component is spl is set to onlySite */}
                        <a style={{ display: props.spl === 'onlySite'? 'none': ''}} href={props.link} target="_blank" rel="noreferrer"><FaGithub size="16px"/>&nbsp;SOURCE</a>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
            <p className={styles.rightContent}>{props.title}</p>
            </div>
        </div>
    );
}
export default WorkContainerSite;
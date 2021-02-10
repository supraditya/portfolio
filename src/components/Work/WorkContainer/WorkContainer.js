import React from 'react'
import styles from './WorkContainer.module.css';
import {FaGithub} from 'react-icons/fa';
const WorkContainer=(props)=>{
    return(
        <div className={styles.outer}>
            <div className={styles.left}>
                <div className={styles.leftContent}>
                    <div className={styles.contentLeftText}>
                        <p className={styles.orangeText}>{props.title}</p>
                        <p className={styles.whiteText}>{props.desc}</p>
                    </div>
                    <div className={styles.contentLeftButton}>
                        <a href={props.link} target="_blank" rel="norefferer"><FaGithub size="16px"/>&nbsp;SOURCE</a>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
            <p className={styles.rightContent}>{props.title}</p>
            </div>
        </div>
    );
}
export default WorkContainer;
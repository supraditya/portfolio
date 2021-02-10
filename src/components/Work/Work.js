import React from 'react'
import styles from './Work.module.css';
import WorkContainer from './WorkContainer/WorkContainer';
const Work=()=>{
    return(
        <div className={styles.work}>
            <div className={styles.whiteText}>
                My Work
            </div>
            <WorkContainer/>
        </div>

    );
}
export default Work;
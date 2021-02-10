import React from 'react'
import styles from './WorkContainer.module.css';
const WorkContainer=(props)=>{
    return(
        <div className={styles.outer}>
            <div className={styles.left}>
                <p className={styles.content}>Est aliquip nisi nostrud aute anim velit.</p>
            </div>
            {/* <div className={styles.content}>Sit amet commodo ex aute ipsum reprehenderit consequat qui laboris eiusmod minim aute nisi.</div> */}
            <div className={styles.right}></div>
        </div>
    );
}
export default WorkContainer;
import React from 'react'
import styles from './About.module.css';
import {FaChevronDown, FaInstagram, FaYoutube, FaSoundcloud} from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';

const About=()=>{
    return(
        <div className={styles.about}>
            <div className={styles.aboutLeft}>
                <h1 className={styles.whiteTextHeader}>Who Am <span className={styles.orangeTextHeader}>I</span>?</h1>
                <p className={styles.whiteText}>
                I, <span className={styles.orangeText}>Aditya Menon</span>, am a 3rd Year Computer Science student here at VIT Vellore.<br></br><br></br> I have been working as a self-taught Frontend Web Developer and Designer for <span className={styles.orangeText}>14</span> months and have completed an internship, along with several projects for my Student Organisation: <span className={styles.orangeText}>IEEE-CS VIT</span>.<br></br><br></br> Apart from Web Development, I occasionally produce music, sketch comedy and standups since you either gotta be funny or good-looking (I’m neither)
                </p>
                <div className={styles.iconDivMobile}>
                    <a href="https://www.instagram.com/menon_aa_gaya/" target="_blank" rel="noreferrer">
                        <span className={styles.icon}>
                        <FaInstagram size="40px"/>
                        </span>
                    </a>
                    <a href="https://www.youtube.com/channel/UC4J1TSccU4G_CriLC9eoAQw" target="_blank" rel="noreferrer">
                        <span className={styles.icon}>
                        <FaYoutube size="40px"/>
                        </span>
                    </a>
                    <a href="https://soundcloud.com/p-r-y-m-e-v-i-l" target="_blank" rel="noreferrer">
                        <span className={styles.icon}>
                        <FaSoundcloud size="40px"/>
                        </span>
                    </a>
                </div>
                <div className={styles.chevDiv}>
                    <p className={styles.thinWhiteText}>NOW, ONTO BUSINESS</p>
                    <button onClick={() => scrollTo('#skills')}><span className={styles.icon}><FaChevronDown/></span></button>
                </div>
            </div>
            <div className={styles.aboutRight}>
                <div className={styles.iconDiv}>
                    <a href="https://www.instagram.com/menon_aa_gaya/" target="_blank" rel="noreferrer">
                        <span className={styles.icon}>
                        <FaInstagram size="50px"/>
                        </span>
                    </a>
                    <a href="https://www.youtube.com/channel/UC4J1TSccU4G_CriLC9eoAQw" target="_blank" rel="noreferrer">
                        <span className={styles.icon}>
                        <FaYoutube size="50px"/>
                        </span>
                    </a>
                    <a href="https://soundcloud.com/p-r-y-m-e-v-i-l" target="_blank" rel="noreferrer">
                        <span className={styles.icon}>
                        <FaSoundcloud size="50px"/>
                        </span>
                    </a>
                </div>

            </div>
        </div>
    )
}
export default About;
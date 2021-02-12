import React, { Component } from 'react'
import styles from './Sidebar.module.css';


class Sidebar extends Component{
    state={
        sidebarCollapsed: true,
        sidebar: "",
    }
    sidebarHandler=()=>{
        if(this.state.sidebarCollapsed)
        {
            this.setState({
                sidebarCollapsed: false,
                sidebar: "translate(250px, 0)",
            });
        }
        else
        {
            this.setState({
                sidebarCollapsed: true,
                sidebar: "translate(500px, 0)",
            });
        }

    }
    render()
    {
        return(
            <div style={{transform: this.state.sidebar}} className={styles.outer}>
                <button onClick={()=>this.sidebarHandler()} className={styles.navButton}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                </button>
                <div className={styles.sidebarOuter}>
                    {this.state.sidebarCollapsed}
                </div>
            </div>
        );

    }

}
export default Sidebar;
import React, { Component } from "react";
import styles from "./Sidebar.module.css";
import scrollTo from "gatsby-plugin-smoothscroll";

class Sidebar extends Component {
  state = {
    buttonStyle: "",
    line1StyleColor: "",
    line1StyleAngle: "",
    // line1StyleTranslate: "",
    line2StyleColor: "",
    line2StyleAngle: "",
    // line2StyleTranslate: "",
    sidebarCollapsed: true,
    sidebar: "",
    overlayStyle: "",
  };
  sidebarHandler = () => {
    if (this.state.sidebarCollapsed) {
      // Sidebar opening
      this.setState({
        buttonStyle: "#000",
        line1StyleColor: "#fff",
        line1StyleAngle: "rotate(-45deg)translate(-2px, 6.5px)",
        // line1StyleTranslate: "translate(-5px, -6px)",
        line2StyleColor: "#fff",
        line2StyleAngle: "rotate(45deg)translate(-2px,-6.5px)",
        // line2StyleTranslate: "translate(-5px, 6px)",
        sidebarCollapsed: false,
        sidebar: "translate(250px, 0)",
        overlayStyle: "100%",
      });
    } else {
      // Sidebar closing
      this.setState({
        buttonStyle: "#fff",
        line1StyleColor: "#000",
        line1StyleAngle: "rotate(0deg)translate(0px, 0px)",
        // line1StyleTranslate: "translate(0px, 0px)",
        line2StyleColor: "#000",
        line2StyleAngle: "rotate(0deg)translate(0px, 0px)",
        // line2StyleTranslate: "translate(0px, 0px)",
        sidebarCollapsed: true,
        sidebar: "translate(500px, 0)",
        overlayStyle: "0",
      });
    }
  };
  scrollAndClose = (toDiv) => {
    scrollTo(toDiv);
    this.sidebarHandler();
  };
  render() {
    return (
      <div
        className={styles.overlay}
        style={{ width: this.state.overlayStyle }}
      >
        <div style={{ transform: this.state.sidebar }} className={styles.outer}>
          <button
            style={{ backgroundColor: this.state.buttonStyle }}
            onClick={() => this.sidebarHandler()}
            className={styles.navButton}
          >
            <div
              style={{
                borderColor: this.state.line1StyleColor,
                transform: this.state.line1StyleAngle,
              }}
              className={styles.line1}
            ></div>
            <div
              style={{
                borderColor: this.state.line2StyleColor,
                transform: this.state.line2StyleAngle,
              }}
              className={styles.line2}
            ></div>
          </button>
          <div className={styles.sidebarOuter}>
            <div className={styles.sidebarLinks}>
              <button onClick={() => this.scrollAndClose("#home")}>Home</button>
              <button onClick={() => this.scrollAndClose("#about")}>
                Who Am I?
              </button>
              <button onClick={() => this.scrollAndClose("#skills")}>
                Skills/Experience
              </button>
              <button onClick={() => this.scrollAndClose("#work")}>
                My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;

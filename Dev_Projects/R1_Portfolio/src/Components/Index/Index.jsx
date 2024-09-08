import React from "react";
import styles from "./index.module.css";
import ProPic from "../Image/ProPic.jpg";
import { usetheme } from "../../ThemeContext/ThemeContext";
import moon from "../Image/moon.png";
import sun from "../Image/sun.png";

// Styling and Light/Dark Theme change

function Index() {
  const { theme, toggleTheme } = usetheme() ;

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section className={styles.Index}>
      <div className={styles.themeChange} onClick={toggleTheme}>
        <img src={themeIcon} alt="" className={styles.themeIcon} />
      </div>
      <div className={styles.leftSec}>
        <h1 className={styles.proName}>Sai Binayak</h1>
        <h2 className={styles.proJob}>FrontEnd Developer</h2>
        <div className={styles.ancLinks}>
          <a href="https://www.linkedin.com" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i class="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://github.com" target="_blank">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </div>
        <div className={styles.proInfo}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </div>
        <a href="" download>
          <button className={styles.button}>Resume</button>
        </a>
      </div>

      <div className={styles.rightSec}>
        <img className={styles.ProImg} src={ProPic} alt="Profile Picture" />
      </div>
    </section>
  );
}

export default Index;

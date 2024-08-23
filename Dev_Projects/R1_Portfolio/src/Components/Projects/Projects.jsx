import React from "react";
import styles from "./projects.module.css";
import spoProject from "../Image/spoProject.png"
import ecomProject from "../Image/ecomProject.jpg"
import foodProject from "../Image/foodProject.jpg"
import ProjectProps from "../../ThemeContext/ProjectProps";


// use of Props

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.proHead}>
        <h1>Projects</h1>
      </div>
      <div className={styles.proContainer}>
      <ProjectProps imgSrc={spoProject} altName={"SpotiLite"} PName={"SpotiLite"} PApp={"Music Streaming App"}/>
      <ProjectProps imgSrc={ecomProject} altName={"EcomHack"} PName={"EcomHack"} PApp={"Ecommerce App"}/>
      <ProjectProps imgSrc={foodProject} altName={"Foodie"} PName={"Foodie"} PApp={"Food delivery App"}/>
      </div>
    </section>
  );
}

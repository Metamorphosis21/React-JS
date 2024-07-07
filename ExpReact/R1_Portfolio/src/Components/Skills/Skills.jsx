import React from 'react'
import styles from './Skills.module.css'
import SkillProps from '../../ThemeContext/SkillProps'
import tick from '../Image/tick.png' 

function Skills() {
  return (
    <section>
      <div className={styles.skillHead}>
        <h1>Skills</h1>
      </div>
      <div className={styles.skillList}>
        <SkillProps imgSrc={tick} p="HTML"/>
        <SkillProps imgSrc={tick} p="CSS"/>
        <SkillProps imgSrc={tick} p="JavaScript"/>
        <SkillProps imgSrc={tick} p="TypeScript"/>
        <SkillProps imgSrc={tick} p="Node"/>
      <hr />
      </div>
      <div className={styles.skillList}>
        <SkillProps imgSrc={tick} p="React"/>
        <SkillProps imgSrc={tick} p="Angular"/>
        <SkillProps imgSrc={tick} p="Vue"/>
        <SkillProps imgSrc={tick} p="SaSS"/>
        <SkillProps imgSrc={tick} p="Tailwind CSS"/>
      <hr />
      </div>
      <div className={styles.skillList}>
        <SkillProps imgSrc={tick} p="Redux"/>
        <SkillProps imgSrc={tick} p="Webpack"/>
        <SkillProps imgSrc={tick} p="Git"/>
        <SkillProps imgSrc={tick} p="Jest"/>
        <SkillProps imgSrc={tick} p="Dart"/>
      </div>
    </section>
  )
}

export default Skills

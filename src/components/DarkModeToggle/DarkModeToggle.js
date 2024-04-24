"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';
import styles from './DarkModeToggle.module.css'

const DarkModeToggle = () => {
  const {mode, toggle} = useContext(ThemeContext);
  return (
    <div className={styles.mode_toggle + ' ' + mode} onClick={toggle}>
      <div className={styles.light}></div>
      <div className={styles.dark}></div>
      <div className={styles.switcher} style={mode === 'light'? {left: '2px'} : {right: '2px'}}></div>
    </div>
  )
}

export default DarkModeToggle
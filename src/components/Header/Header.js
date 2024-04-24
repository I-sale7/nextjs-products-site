import React from 'react'
import styles from './Header.module.css'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <header className={styles["top-navigation"]}>
        <div className={styles.logo}>
            {"Site-Logo"}
        </div>
        <Navigation className={styles["nav-list"]}/>
    </header>
  )
}

export default Header
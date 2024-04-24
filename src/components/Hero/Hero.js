import React from 'react'
import styles from './Hero.module.css'
import Button from '../PureComponents/Button/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles['hero__info-box']}>
            <h1 className={styles.hero__title}>
                This is the Hero Title.
            </h1>
            <p className={styles.hero__subtitle}>
                This is the Hero subtitle, in here we can write some small text related to title so the user can understand what this website is all about.
            </p>
            <p className={styles.hero__description}>
                This area is related to the site description, and we can write about the site and anything else we need to help the user in someway going through the site. 
            </p>
            <Button title="Login" />
        </div>
        <Image className={styles.hero__image} src='hero.svg' width={800} height={500} alt=''></Image>
    </div>
  )
}

export default Hero
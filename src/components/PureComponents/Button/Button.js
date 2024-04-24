"use client"
import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button className={styles.button + ' ' + props.styles} role='button'>{props.title}</button>
  )
}

export default Button
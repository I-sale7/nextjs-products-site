import React from 'react'
import Link from 'next/link'
import {Links} from './Links'
import styles from "./Navigation.module.css";
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navigation = (props) => {
  return (
    <div className={`${props.className} ${styles.navigation}`}>
      <DarkModeToggle></DarkModeToggle>
        {Links.map(link => {
                return <Link key={link.id} href={link.path}> {link.title} </Link>
            }  
        )}
    </div>
  )
}

export default Navigation;
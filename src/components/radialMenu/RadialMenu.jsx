import React from 'react'
import styles from './RadialMenu.module.css'
import LanguageSwitcher from '../buttons/LanguageSwitcher'

const RadialMenu = () => {
  return (
    <div className={`${styles.container}`}>
        <span className={`${styles.wraper}`}><span></span></span>
        <div className={`${styles.wrap}`}>
         <a href="#"><div></div></a>
         <a href="#"><div></div></a>
         <a href="#"><div></div></a>
         <a href="#"><div></div></a>
         <a href="#"><div></div></a>
        </div>
    </div>
  )
}

export default RadialMenu
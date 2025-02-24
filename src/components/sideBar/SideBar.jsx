'use client'
import React, { useEffect, useRef } from 'react'
import styles from './SideBar.module.css'
import Image from 'next/image'
import LanguageSwitcher from '../buttons/LanguageSwitcher'
import PersonalImage from './PersonalImage'

const SideBar = () => {

  const carTextRef = useRef(null);
  useEffect(() => {  
    if (carTextRef.current) {   
        carTextRef.current.style.left = '40px'; 
        carTextRef.current.style.width= '250px'
    }  
}, []);
 
  return (
    <div className={`${styles.container}`}>
        <div ref={carTextRef} className={`${styles.cartext}`}>
            <div className={`${styles.personalImage}`}>
              <PersonalImage/>
            </div>
            <div className={`${styles.personalInfo}`}>
                <h4>Arad Habashi</h4>
                <h6>hello everyone</h6>
                <h6>its my website</h6>
            </div>
            <div className={`${styles.features}`}>
                <LanguageSwitcher/>
            </div>
        </div>
    </div>
  )
}

export default SideBar
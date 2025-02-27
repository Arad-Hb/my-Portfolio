'use client'
import React, { useEffect, useRef } from 'react'
import styles from './SideBar.module.css'
import Image from 'next/image'



const SideBar = () => {

  const cartexRef = useRef(null);
  const cartexImage=useRef(null);
  useEffect(() => {  
    if (cartexRef.current) {   
        cartexRef.current.style.left = '40px'; 
        cartexRef.current.style.width= '250px';
        cartexImage.current.style.top='-50px';
        cartexImage.current.style.left='50px';
    }  
}, []);
 
  return (
    <div className={`${styles.container}`}>
        <div ref={cartexRef} className={`${styles.cartext}`}>
            <div ref={cartexImage} className={`${styles.personalImage}`}>
              <Image className={`${styles.image}`} alt='my picture' key={'aradHb'} width={125} height={165} src={'/images/arad.png'}/>
            </div>
            <div className={`${styles.personalInfo}`}>
                <h4>Arad Habashi</h4>
                <h6>hello everyone</h6>
                <h6>its my website</h6>
            </div>
            <div className={`${styles.features}`}>
             
            </div>
        </div>
    </div>
  )
}

export default SideBar
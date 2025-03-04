'use client'
import React from 'react'
import styles from './RadialMenu.module.css'
import { setUserLocale } from '@/services/locale';
import { usePathname, useRouter } from 'next/navigation'; 


const RadialMenu = () => {
  const router = useRouter();  
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const changeLanguage =(lang) => {  
    if(currentLocale !== lang)
    {
      setUserLocale(lang);
      router.push( `/${lang}`); 
    }
  };
  const ModeHandler=(mode)=>{
    var element = document.body;
    element.classList.toggle(mode);
}

  return (
    <div className={`${styles.container}`}>
        <span className={`${styles.wraper}`}><span></span></span>
        <div className={`${styles.wrap}`}>
         <a href="#"><div onClick={() => changeLanguage('ir')} key="iranLocaleButton"></div></a>
         <a href="#"><div onClick={() => changeLanguage('en')} key="englishLocaleButton"></div></a>
         <a href="#"><div onClick={() => ModeHandler('light-mode')} key="lightModeButton"></div></a>
         <a href="#"><div onClick={() => ModeHandler('night-mode')} key="nightModeButton"></div></a>
         <a href="#"><div></div></a>
        </div> 
    </div>
  )
}

export default RadialMenu
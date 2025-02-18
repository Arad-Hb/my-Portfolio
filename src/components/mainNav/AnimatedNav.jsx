'use client'; 
import React from 'react';  
import styles from './AnimatedNav.module.css'; 
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const AnimatedNav = () => {  

  const t = useTranslations('MainNav');
  const GetID=()=>{
      return crypto.randomUUID()
    }
    return ( 
      <div className={styles.container}>
        <ul className={styles.navList}>  
            <li><Link key={GetID()} target="_blank" href="#Home" data-text={t('home')}>{t('home')}</Link></li>  
            <li><Link key={GetID()} target="_blank" href="#About" data-text={t('about')}>{t('about')}</Link></li>  
            <li><Link key={GetID()} target="_blank" href="#Contact" data-text={t('contact')}>{t('contact')}</Link></li>  
            <li><Link key={GetID()} target="_blank" href="#Projects" data-text={t('projects')}>{t('projects')}</Link></li>  
            <li><Link key={GetID()} target="_blank" href="#Services" data-text={t('services')}>{t('services')}</Link></li>  
            <li><Link key={GetID()} target="_blank" href="#Resume" data-text={t('resume')}>{t('resume')}</Link></li> 
        </ul> 
      </div>
    );  
}  

export default AnimatedNav;
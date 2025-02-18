"use client";  

import styles from './LanguageSwitcher.module.css';
import ReactCountryFlag from "react-country-flag";
import { setUserLocale } from '@/services/locale';
import { usePathname, useRouter } from 'next/navigation';  


const LanguageSwitcher =() => {  
  const router = useRouter();  
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';
  const locales = [
    { name: 'en', code: 'US' },
    { name: 'ir', code: 'IR' }
  ]

  const getFlagClassName = (locale) => {  
    return `${styles.flag} ${currentLocale === locale.name ? styles.active : ' '}`;  
};
  const changeLanguage =(lang) => {  
    setUserLocale(lang);
    router.push( `/${lang}`);  
  };  

  return (  
    <div className={`${styles.container}`}> 
      {locales.map((locale) => (
        <div className={getFlagClassName(locale)} key={`${locale.name}flagDiv`}>
          <ReactCountryFlag style={{width:'35px', height:'28px',borderRadius:'30%'}}
          onClick={() => changeLanguage(`${locale.name}`)} 
          key={`${locale.name}flag`} 
          countryCode={`${locale.code}`} svg />
        </div>
      ))}
    </div>  
  );  
};  

export default LanguageSwitcher;


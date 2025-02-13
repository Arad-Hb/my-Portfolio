// "use client";  

// import { useRouter } from 'next/navigation';  
// import Link from 'next/link'
// import React from 'react'

// const LanguageSwitcher = () => {

//   const router = useRouter();  

//   const changeLanguage = (lang) => {  
//     router.push(router.pathname, router.asPath, { locale: lang });  
//   };  

//   return (
//     <div>  
//       <button onClick={() => changeLanguage('en')}>English</button>  
//       <button onClick={() => changeLanguage('ir')}>Persian</button>  
//     </div>  
//   )
// }

// export default LanguageSwitcher


"use client";  

import { setUserLocale } from '@/services/locale';
import { useRouter } from 'next/navigation';  

const LanguageSwitcher =() => {  
  const router = useRouter();  

  const changeLanguage =(lang) => {  
    // Construct the new URL replacing the current locale  
    // const url = router.asPath.replace(/\/(en|ir)/, `/${lang}`);  
    setUserLocale(lang);
    router.push( `/${lang}`);  
  };  

  return (  
    <div>  
      <button onClick={() => changeLanguage('en')}>English</button>  
      <button onClick={() => changeLanguage('ir')}>Persian</button>  
    </div>  
  );  
};  

export default LanguageSwitcher;


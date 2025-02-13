// import { getRequestConfig } from 'next-intl/server';  

// const requestConfig = async () => {  

//   const locale = 'en'; 

//   return {  
//     locale,  
//     messages: (await import(`../../messages/${locale}.json`)).default,  
//   };  
// };  

// export default getRequestConfig(requestConfig);

import {getUserLocale} from '../services/locale';
import { getRequestConfig } from 'next-intl/server';  

const requestConfig = async () => {  

  const locale = await getUserLocale();

  return {  
    locale,  
    messages: (await import(`../../messages/${locale}.json`)).default,  
  };  
};  

export default getRequestConfig(requestConfig);

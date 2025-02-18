'use server';  

import { cookies } from 'next/headers';  
import { locales, defaultLocale } from '../i18n/config';  

const cookieLocale = 'NEXT_LOCALE';  

export async function getUserLocale() {  
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(cookieLocale)?.value;
  return cookieValue || defaultLocale;
}  

export async function setUserLocale(locale) {  
  if (locales.includes(locale)) {  
    const cookieStore = await cookies();
    cookieStore.set(cookieLocale, locale);
  } else {  
    throw new Error(`Unsupported locale: ${locale}`);  
  }  
}
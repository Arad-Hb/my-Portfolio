import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';  
import { getLocale, getMessages } from 'next-intl/server';  
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {

    const locale =await getLocale();  
    const messages =await getMessages();
     
  return (  
    <html lang={locale}>  
      <body>  
        <NextIntlClientProvider messages={messages}>  
          {/* <LanguageSwitcher/> */}
          {children}  
        </NextIntlClientProvider> 
      </body>  
    </html>  
  );  
}

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import React from 'react'


// export const metadata = {
//     title: "Arad Habashi Portfolio",
//     description: "Welcome To My Website",
   
//   };

  export async function generateMetadata() {

    const t= await getTranslations('Seo');

    return {
        title: t("title"),
        description: t("description")
    }
}

const layout = async({children}) => {

  const setMetaData=await generateMetadata();
  const locale =await getLocale();  
  const messages =await getMessages();

  
  return (
    <div>
      <NextIntlClientProvider messages={messages}>  
        {children}  
      </NextIntlClientProvider>
    </div>
  )
}

export default layout
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import React from 'react'

const layout = async({children}) => {

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
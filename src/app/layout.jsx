import React from 'react'
import Header from '@/app/components/Header'
import Providers from "./providers"
import "./globals.css"
function layout({children}) {
  return (
    <html lang='en'>
      <head>
        <title>devdossier</title>
        <meta name='author' content='Farid Mutallimov'></meta>
      </head>
        <body className='bg-[#f6f8ff] dark:bg-[#141d2f]'>
            <Providers>
            <Header/>
            {children}
            </Providers>
        </body>
    </html>
  )
}

export default layout
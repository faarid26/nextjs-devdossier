"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'
const providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        {children}
    </ThemeProvider>
  )
}

export default providers
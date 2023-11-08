"use client"
import React, { useEffect, useState } from 'react'
import ThemeComp from './ThemeComp'
import { useTheme } from 'next-themes';
const Header = () => {
  const {resolvedTheme} = useTheme();

  return (
    <header  className='max-w-[90%] w-[700px] flex justify-between m-140-30 items-center'>
      <h1 className='text-[28px] text-[#000] dark:text-[#fff] tracking-widest duration-200'>devDossier</h1>
      <div className='flex items-center w-[76px] justify-between uppercase'>
        <p className='text-[#a5a5a5] dark:text-[#fff] text-[17px] duration-200 tracking-[0.20rem]'>
          {resolvedTheme === 'light' ? "dark" : "light"}
        </p>
        <ThemeComp/>
      </div>
    </header>
  )
}

export default Header
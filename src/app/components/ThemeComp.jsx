"use client"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
const ThemeComp = () => {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === "system" ? systemTheme : theme

  return (
   <div>
    {
        mounted && (
            themeMode === "dark" ?
            <BsSunFill size={20} onClick={() => setTheme('light')} className='cursor-pointer'/> : <BsFillMoonFill size={20} onClick={() => setTheme('dark')} className='cursor-pointer text-[#a5a5a5] dark:text-[#fff]'/>
        )
    }
   </div>
  )
}

export default ThemeComp
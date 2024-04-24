"use client"
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [mode, setMode] = useState('dark');

  const toggle = () => {
    return setMode(prev => prev === 'light'? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{mode, toggle}}>
      <div className={`container theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
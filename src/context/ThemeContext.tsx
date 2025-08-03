import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'theme1' | 'theme2' | 'theme3'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('theme1')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) setThemeState(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)

    const body = document.body
    body.classList.add('transition-all', 'duration-500')
    body.className = theme
  }, [theme])

  const setTheme = (newTheme: Theme) => setThemeState(newTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Theme = 'theme1' | 'theme2' | 'theme3';

const ThemeContext = createContext({
  theme: 'theme1' as Theme,
  setTheme: (theme: Theme) => {}
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'theme1'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

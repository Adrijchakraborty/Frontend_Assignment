import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTheme, type Theme } from '../context/ThemeContext'

const Header: React.FC = () => {
  const [themeState, setThemeState] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  const options: Theme[] = ['theme1', 'theme2', 'theme3']

  return (
    <div
      onMouseLeave={() => setThemeState(false)}
      className="bg-[var(--bg)] sticky top-0 flex justify-between md:justify-around items-center shadow-sm px-4 md:px-0 py-2"
    >
      <span className="uppercase text-xl">Logo.</span>
      <div className="relative">
        <button
          onClick={() => setThemeState((prev) => !prev)}
          className="border p-2 cursor-pointer flex gap-1.5 capitalize"
        >
          {theme}
          {themeState ? <ChevronUp /> : <ChevronDown />}
        </button>

        <div
          className={`absolute z-10 top-full left-0 w-full border shadow transition-all duration-200 ease-in-out origin-top transform ${
            themeState
              ? 'opacity-100 scale-y-100 visible'
              : 'opacity-0 scale-y-95 invisible'
          }`}
        >
          {options.map((item, id) => (
            <span
              key={id}
              className="block px-4 py-2 cursor-pointer capitalize hover:bg-[var(--hover-bg)]"
              onClick={() => {
                setTheme(item)
                setThemeState(false)
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header

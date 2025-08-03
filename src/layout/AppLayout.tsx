import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { useTheme } from '../context/ThemeContext'

const AppLayout: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme}`}>
      <Header />

      {theme === 'theme2' ? (
        // Sidebar layout
        <div className="flex">
          <aside className="w-32 md:w-64 bg-gray-900 text-white p-4 min-h-screen">
            <Navigation />
          </aside>
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </div>
      ) : (
        // Theme 1 & 3 layout
        <main className="p-4 max-w-7xl mx-auto">
          <div className="mb-4">
            <Navigation />
          </div>
          <Outlet />
        </main>
      )}
    </div>
  )
}

export default AppLayout

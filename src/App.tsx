import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home } from './pages'
import AppLayout from './layout/AppLayout'

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
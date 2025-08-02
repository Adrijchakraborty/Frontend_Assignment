import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home } from './pages'
import Layout1 from './layout/Layout1'

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout1 />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
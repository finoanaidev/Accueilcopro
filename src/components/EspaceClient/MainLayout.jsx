import React from 'react'
import Navbar from './Navbar'
import { Routes, Route} from 'react-router-dom'
import Accueil from './Accueil'
import Syndic from './Syndic'
function MainLayout() {
  return (
    <div>
        <Navbar />
        <Routes>
        <Route path='/' element={<Accueil />} />
          <Route path="/syndic" element={<Syndic />}/>
        </Routes>
    </div>
  )
}

export default MainLayout
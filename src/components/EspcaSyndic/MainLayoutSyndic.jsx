import React from 'react'
import AccueilSyndic from './AccueilSyndic'
import MonCopropriete from './MonCopropriete'
import {Routes, Route} from 'react-router-dom'
function MainLayoutSyndic() {
  return (
    <div>
        <AccueilSyndic />
        <Routes>
        <Route path='/copropriete' element={<MonCopropriete />} />
         
        </Routes>
    </div>
  )
}

export default MainLayoutSyndic
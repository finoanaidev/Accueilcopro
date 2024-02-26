// import Navbar from './components/Navbar';
// import './App.css';
// import Accueil from './components/Accueil';
// import Syndic from './components/Syndic';
// import {Routes, Route} from 'react-router-dom';
// import AccueilSyndic from './components/EspcaSyndic/AccueilSyndic';

// function App() {
//   return (
//     <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Accueil />}/>
//           <Route path='/syndic' element={<Syndic />}/>
//           <Route>
//             <Route path='/accueilSyndic' element={<AccueilSyndic/>}/>
//           </Route>
//         </Routes>
//     </div>
//   );
// }

// export default App;

// App.js
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Accueil from "./components/Accueil";
// import Syndic from "./components/Syndic";
// import AccueilSyndic from "./components/EspcaSyndic/AccueilSyndic";

// function App() {
//   return (
//     <div className="App">
    
//       <Routes>
//         <Route element={<Navbar />}>
//           <Route path="/" element={<Accueil />} />
//           <Route path="/syndic" element={<Syndic />} />
//         </Route>
        
    
//         <Route path="/accueilSyndic" element={<AccueilSyndic />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from './components/EspaceClient/Accueil'
import Navbar from './components/EspaceClient/Navbar'
import Syndic from "./components/EspaceClient/Syndic";
import MainLayout from "./components/EspaceClient/MainLayout";

import AccueilSyndic from "./components/EspcaSyndic/AccueilSyndic";
import MainLayoutSyndic from "./components/EspcaSyndic/MainLayoutSyndic";
import MonCopropriete from "./components/EspcaSyndic/MonCopropriete";


function App() {
  return (
    <div className="App">
 
      <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navbar />} />
          <Route path='/' element={<Accueil />} />
          <Route path="syndic" element={<Syndic />}/>
        </Route>
  
      <Route element={<MainLayoutSyndic />}>
        <Route path="/accueilSyndic" element={<AccueilSyndic />} />
          <Route path='/copropriete' element={<MonCopropriete />} />
         
        </Route>
      </Routes>

{/* <Routes>
  <Route element={<MainLayout />}>
    <Route index element={<Navbar />} />
    <Route path="/*" element={<Accueil />} />
    <Route path="syndic" element={<Syndic />} />
  </Route>

  {/* Routes pour les administrateurs *
  <Route element={<MainLayoutSyndic />}>
    <Route path="/accueilSyndic" element={<AccueilSyndic />} />
    <Route path='/copropriete' element={<MonCopropriete />} />
  </Route>
</Routes> */}



    </div>
  );
}

export default App;


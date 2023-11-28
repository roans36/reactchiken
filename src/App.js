import React from 'react'
import { Route, Routes } from 'react-router'

import Notfound from './components/Notfound'

import About from './pages/About'
import RootLayOut from './components/RootLayOut'
import HomepAge from './components/HomepAge'
import DetailPage from './pages/DetailPage'




const App = () => {
return (
<>
 <Routes>
<Route path='/' element={<RootLayOut />}>
<Route index element={<HomepAge />} />
<Route path='detail/:id' element={<DetailPage />} />
<Route path='about-page' element={<About />} />
<Route path='*' element={<Notfound />} />
</Route>

    </Routes>
     </>
    
  )
  

  }
export default App


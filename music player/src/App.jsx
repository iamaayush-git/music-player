import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AlbumDetails from './pages/AlbumDetails'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>  
          <Route path='/' element={<Home/>} />
          <Route path='/album/:id' element={<AlbumDetails/>} />
        </Routes>
    </BrowserRouter>

  )
}

export default App
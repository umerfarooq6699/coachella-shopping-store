import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Selectoption from './Pages/Selectoption'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/selectoptions" element={<Selectoption/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
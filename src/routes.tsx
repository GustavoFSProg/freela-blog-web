import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import Register from './Register'

function Routing() {
  return (
   
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
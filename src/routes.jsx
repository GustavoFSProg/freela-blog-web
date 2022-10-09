import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import Register from './Register'
import Update from './Update'

function Routing() {
  return (

    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
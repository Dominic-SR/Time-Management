import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from './Pages/Dashboard/Dashboard'
import Main from './Pages/Main/Main'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>}>
          <Route path="/" element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
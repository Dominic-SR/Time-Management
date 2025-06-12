import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header/Header'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
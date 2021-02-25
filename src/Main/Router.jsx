import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../Components/Helper/ProtectedRoute'

import Home from '../Components/Home'
import User from '../Components/User'
import Business from '../Components/Business'
import NotFound from '../Components/Helper/NotFound'

const Router = () => {
  return (
    <Routes>
      <ProtectedRoute path="/" element={<Home />} />
      <Route path="/login" element={<User />} />
      <ProtectedRoute path="/receita/*" element={<Business />} />
      <ProtectedRoute path="/despesa/*" element={<Business />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router;
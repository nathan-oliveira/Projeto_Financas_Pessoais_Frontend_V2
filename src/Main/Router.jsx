import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../Components/Helper/ProtectedRoute'

import Home from '../Components/Home'
import User from '../Components/User'
import Business from '../Components/Business'
import NotFound from '../Components/Helper/NotFound'
import Goals from '../Components/Goals'
import Category from '../Components/Category'
import Profile from '../Components/Profile'

const Router = () => {
  return (
    <Routes>
      <ProtectedRoute path="/" element={<Home />} />
      <Route path="/login" element={<User />} />
      <ProtectedRoute path="/receita/*" element={<Business />} />
      <ProtectedRoute path="/despesa/*" element={<Business />} />
      <ProtectedRoute path="/metas/*" element={<Goals />} />
      <ProtectedRoute path="/categoria/*" element={<Category />} />
      <ProtectedRoute path="/minha-conta" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router;
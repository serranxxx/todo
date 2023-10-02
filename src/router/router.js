import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'
import { HomePage } from '../pages/home/HomePage'
import withAuth from '../hoc/withAuth'

export const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" Component={withAuth(HomePage)} />

    </Routes >
  )
}

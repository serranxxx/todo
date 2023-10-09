import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'
import { HomePage } from '../pages/home/HomePage'

import withAuth from '../hoc/withAuth'

export const AppRouter = () => {


  return (
    <Routes>

      <Route path="/" Component={withAuth(LoginPage)} />
      <Route path="/login" Component={withAuth(LoginPage)} />
      <Route path="/home" Component={withAuth(HomePage)} />

    </Routes >
  )
}

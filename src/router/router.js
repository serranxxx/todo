import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'
import { HomePage } from '../pages/home/HomePage'

import withAuth from '../hoc/withAuth'

export const AppRouter = () => {


  return (
    <Routes>

      <Route path="/todo" Component={withAuth(LoginPage)} />
      <Route path="/todo/login" Component={withAuth(LoginPage)} />
      <Route path="/todo/home" Component={withAuth(HomePage)} />

    </Routes >
  )
}

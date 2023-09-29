import React from 'react'
import { AppRouter } from './router/router'
import { AppProvider } from './context/AppProvider'

export const TodoApp = () => {
  return (
    <AppProvider >
      <AppRouter />
    </AppProvider>
  )
}


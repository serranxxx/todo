import React, { useReducer } from 'react'
import { AppReducer } from './appReducer'
import { types } from './types'
import { appContext } from './appContext'

const init = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    return {
        isLogged: !!user,
        user: user,
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, {}, init)


    const login = (username = '', name = '', _id = '', avatar = 1) => {
        const user = {
            username, name, _id, avatar
        }
        const action = {
            type: types.LOGIN,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }



    return (
        <appContext.Provider value={{
            ...state,
            login,
        }} >
            {children}
        </appContext.Provider>
    )
}

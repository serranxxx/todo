import React, { useContext, useReducer } from 'react'
import { AppReducer } from './appReducer'
import { types } from './types'
import { appContext } from './appContext'
import { notification } from 'antd'

const init = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const logged = JSON.parse(localStorage.getItem('logged'))

    return {
        isLogged: logged,
        user: user,
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, {}, init)


    const login = (username = '', name = '', lastname = '', _id = '', avatar = 1) => {
        const user = {
            username, name, lastname, _id, avatar
        }
        const action = {
            type: types.LOGIN,
            payload: user
        }
        notification.open({
            message: `Welcome back ${user.name}!`,
            description: "We're glad to see you again",
            duration: 3,
            className: 'notification'
        })
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('logged', JSON.stringify(true))
        dispatch(action)
    }

    const logout = () => {
        const action = {
            type: types.LOGOUT
        }

        if (localStorage.getItem('user')) {
            localStorage.removeItem('user')
        }
        dispatch(action)
        localStorage.setItem('logged', JSON.stringify(false))
    }

    const setMyTasks = (tasks = []) => {
        const action = {
            type: types.GET_TASKS,
            payload: tasks
        }
        dispatch(action)
    }

    const currentTask = (task = '') => {
        const Task = task
        const action = {
            type: types.CURRENT_TASK,
            payload: Task
        }
        dispatch(action)
    }

    return (
        <appContext.Provider value={{
            ...state,
            login,
            logout,
            setMyTasks,
            currentTask,
        }} >
            {children}
        </appContext.Provider>
    )
}

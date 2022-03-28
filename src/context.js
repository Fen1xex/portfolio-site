import React, { useReducer, useEffect, useContext } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  isSidebarOpen: false,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' })
  }

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' })
  }

  return (
    <AppContext.Provider value={{ ...state, closeSidebar, openSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

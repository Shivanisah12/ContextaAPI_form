import React from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

const App = () => {
  return (
    <>
      <UserContextProvider>
      <h1>Welcome to Context API</h1>
      <Login/>
      <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App

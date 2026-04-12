import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import './App.css'
import Profile from './Components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1 className='text-5xl text-center'>Chai aur code</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App

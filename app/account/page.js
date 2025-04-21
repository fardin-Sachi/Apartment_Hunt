import React from 'react'
import Navbar from '../components/navbar'
import Login from './login'
import LoginFooter from '../components/common/loginFooter'

export default function Account() {
  return (
    <div>
      <Navbar />
      <Login />
      <LoginFooter />
    </div>
  )
}

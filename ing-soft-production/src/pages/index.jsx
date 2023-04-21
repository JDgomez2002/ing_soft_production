import React, { useEffect } from 'react'
import Login from './Login'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'

const Page = () => {
  return (
    <Switch>
      {/*READY */}
      <Route path="/MainPage">
        <MainPage />
      </Route>
      {/*BUILDING */}
      <Route path="/Login">
        <p>Login</p>
      </Route>
      <Route path="/Signin">
        <p>Signin</p>
      </Route>
      <Route path="/Landing">
        <p>Signin</p>
      </Route>
      {/*MAIN */}
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  )
}

export default Page

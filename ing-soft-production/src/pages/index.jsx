import React, { useEffect } from 'react'
import Login from './Login'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Signup from './Signup'

const Page = () => {
  return (
    <Switch>
      {/*READY */}
      <Route path="/MainPage">
        <MainPage />
      </Route>
      {/*BUILDING */}
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup />
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

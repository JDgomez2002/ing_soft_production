import React, { useEffect } from 'react'
import Login from './Login'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'

const Page = () => {

  return (
    <Switch>
      <Route path="/MainPage">
        <MainPage/>
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  )
}

export default Page

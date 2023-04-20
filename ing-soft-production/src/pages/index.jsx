import React, { useEffect } from 'react'
import Login from './Login'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'

const Page = () => {

  return (
    <Switch>
      {/* <Route path="/Proj2_DBI/MainPage">
          <MainPage />
      </Route> */}
      {/* <Route path="/Proj2_DBI/SignIn">
        <SignIn />
      </Route> */}
      {/* <Route path="/Proj2_DBI/InfoPatient">
        <InfoPatient fullscreen={true} />
      </Route> */}
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

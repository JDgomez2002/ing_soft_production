import { useEffect } from 'react'
import { Link } from 'react-router-dom'

/* COMPONENTS */
import NavBar from '/src/components/NavBar/NavBar'

/* STYLES AND ASSETS */
import AppName from '/src/assets/AppName.svg'
import * as landingStyles from './Landing.module.css'

function Landing() {
  return (
    <>
      <div className={landingStyles.container}>
        <img src={AppName} className={landingStyles.logo} loading="lazy" />
      </div>
      <NavBar />
      {/*      
      <Link to="/Login">Go to main page</Link>
      <Link to="/Signin">Go to main page</Link>*/}
    </>
  )
}

export default Landing

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

  return (
    <>
    <div>
      We're in the login
    </div>
    <Link to="/MainPage" >Go to main page</Link>
    </>
  )
}

export default Login

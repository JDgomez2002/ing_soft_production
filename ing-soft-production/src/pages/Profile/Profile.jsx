import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

function Profile() {
  return (
    <>
      <div>We're in the Profile</div>
      <Link to="/MainPage">Go to main page</Link>
    </>
  )
}

export default Profile

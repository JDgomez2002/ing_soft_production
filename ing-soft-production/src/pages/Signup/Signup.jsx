import * as styles from './Signup.module.css'

function Signup() {

  return (
    <div className={styles.root} >
      <div className={styles.container} >
        <h1>Sign Up</h1>
        <h3>Username</h3>
        <input id="input-username" ></input>
        <h3>Name</h3>
        <input id="input-name"></input>
        <h3>Lastname</h3>
        <input id="input-lastname"></input>
        <h3>Email</h3>
        <input id="input-email" type="email" ></input>
        <h3>Password</h3>
        <input id="input-password" type="password" ></input>
        <h3>Confirm Password</h3>
        <input id="input-confirm-password" type="password" ></input>
        <div className={styles.buttonContainer} >
          <button>Signin</button>
        </div>
      </div>
    </div>
  )
}

export default Signup

import * as styles from './Login.module.css'

function Login() {

  return (
    <div className={styles.root} >
      <div className={styles.container} >
        <h1>Login</h1>
        <h3>Username</h3>
        <input></input>
        <h3>Password</h3>
        <input type="password" ></input>
        <div className={styles.buttonContainer} >
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login

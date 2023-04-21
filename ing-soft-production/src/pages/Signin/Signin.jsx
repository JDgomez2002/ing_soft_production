import * as styles from './Signin.module.css'

function Signin() {

  return (
    <div className={styles.root} >
      <div className={styles.container} >
        <h1>Signin</h1>
        <h3>Username</h3>
        <input></input>
        <h3>Password</h3>
        <input type="password" ></input>
        <h3>Confirm Password</h3>
        <input type="password" ></input>
        <div className={styles.buttonContainer} >
          <button>Signin</button>
        </div>
      </div>
    </div>
  )
}

export default Signin

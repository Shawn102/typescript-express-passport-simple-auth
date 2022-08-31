import React from 'react';
import googleImg from "../../assets/google.png";
import github from "../../assets/github.png";
import styles from "./Loginpage.module.css";

const Loginpage = () => {
    const googleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }
    const githubLogin = () => {
        window.open("http://localhost:5000/auth/github/", "_self")
    }
  return (
    <div className={styles.loginPage}>
        <h1>Login Page</h1>
        <div className={styles.loginForm}>
        <div className={styles.googleContainer} onClick={googleLogin}>
        <img src={googleImg} alt="google Image" />
        <p>Login with google</p>
        </div>
        <div className={styles.googleContainer} onClick={githubLogin}>
        <img src={github} alt="google Image" />
        <p>Login with github</p>
        </div>
        </div>
    </div>
  )
}

export default Loginpage
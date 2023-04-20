import React from 'react';
import styles from '../styles/style.module.css';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <div className={styles.loginFields}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit" className={styles.loginButtons}>Login</button>
      </div>
      <div className={styles.footer}>
        Simple Footer
      </div>
    </div>
  )
}

export default Login;
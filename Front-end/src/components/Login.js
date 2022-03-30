import React from "react";
import google from "../assets/google.svg";
import styles from "./Login.module.css";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

export const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to Biligram!</h2>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google"></img>
          Sign in with google
        </div>
      </div>
    </div>
  );
};

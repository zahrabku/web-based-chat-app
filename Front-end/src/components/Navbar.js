import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>biligram</div>
      <div className={styles.logout}>Logout</div>
    </div>
  );
};

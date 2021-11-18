import React from "react";
import SearchBar from "../SearcBar/SearchBar";
import styles from "./TopNav.module.css";
const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <h4 className={styles.brand}>Mahdi developer</h4>
      <SearchBar />
    </div>
  );
};

export default TopNav;

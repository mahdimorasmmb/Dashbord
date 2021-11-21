import React from "react";
import SearchBar from "../SearcBar/SearchBar";
import styles from "./TopNav.module.css";
const TopNav = () => {
  return (
    <div
      className={`${styles.topNav} d-flex justify-content-between align-items-center px-3  `}
    >
      <h4 className={styles.brand}>Mahdi developer</h4>
      <SearchBar />
    </div>
  );
};

export default TopNav;

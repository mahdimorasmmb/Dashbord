import React from "react";
import Icon from "../Icons/Icon";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Icon icon="search" color="#C3CAD9" classes={styles.search} width={12} />
      <input className={styles.input} type="search" placeholder="Search  " />
      <Icon icon="arrow" classes={styles.arrow} width={12} />
    </div>
  );
};

export default SearchBar;

import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <input
        className={styles.searchBar}
        type="search"
        placeholder="Search  "
      />
    </div>
  );
};

export default SearchBar;

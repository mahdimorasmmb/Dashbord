import React from "react";

import styles from "./StatsItem.module.css";

const StatsItem = ({ number, description }) => {
  return (
    <div>
      <h2 className={styles.number}>{number}</h2>
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default StatsItem;

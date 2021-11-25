import React from "react";

import styles from "./StatsItem.module.css";

const StatsItem = ({ number, description }) => {
  return (
    <>
      <h2>{number}</h2>
      <p>{description}</p>
    </>
  );
};

export default StatsItem;

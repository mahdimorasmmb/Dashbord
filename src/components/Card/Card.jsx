import React from "react";
import Icon from "../Icons/Icon";

import styles from "./Card.module.css";

const Card = ({ headline, children }) => {
  return (
    <div className={styles.card}>
      <div className="d-flex justify-content-between alingn-item-baseline">
        <h6 className={styles.headline}>{headline}</h6>
        <Icon icon="options" classes={"ml-4"} width={4} />
      </div>
      <div className="d-flex align-items-center h-100">{children}</div>
    </div>
  );
};

export default Card;

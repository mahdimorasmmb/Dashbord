import React from "react";
import Icon from "../Icons/Icon";

import styles from "./SingleProduct.module.css";

const SingleProduct = ({
  imgSrc,
  imgAlt,
  amount,
  percentage,
  icon,
  isUpTrend,
}) => {
  return (
    <div
      className={`d-flex   justify-content-between align-items-center ${styles.single}`}
    >
      <img className={`${styles.img}`} src={imgSrc} alt={imgAlt} />
      <div>
        <h5 className={styles.amount}>
          <Icon classes="mr-4" icon={icon} />
          {amount}
        </h5>
        <p
          className={`${styles.precentage_alert} ${
            isUpTrend && styles.precentage_success
          }`}
        >
          <Icon
            classes={`mr-4 ${
              isUpTrend ? styles.icon_success : styles.icon_alert
            }`}
            icon={isUpTrend ? "stats" : "downtrend"}
          />
          {percentage} %
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;

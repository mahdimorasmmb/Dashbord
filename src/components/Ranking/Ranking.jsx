import React from "react";
import Icon from "../Icons/Icon";
import ProfitAmount from "../ProfitAmount/ProfitAmount";

import styles from "./Ranking.module.css";

const Ranking = ({ data }) => {
  return (
    <div className={`w-100 ${styles.ranking}`}>
      {data.map((item, index) => (
        <div
          key={`${item.name}${index}`}
          className="d-flex  justify-content-between mb-4  align-items-center  "
        >
          <div className="d-flex align-items-center ">
            {item.img ? (
              <img className={styles.img} src={item.img} alt="" />
            ) : (
              <div className={`mr-2 ${styles.circle} `}>{index + 1}</div>
            )}
            <div className="ml-2 font-weight-bold">{item.name}</div>
          </div>
          <div>
            {item["upTrend"] === undefined ? (
              ""
            ) : (
              <Icon
                width={12}
                classes={`mr-2 ${
                  item.upTrend ? styles.upTrend : styles.downTrend
                }`}
              />
            )}
            <ProfitAmount amount={item.profit} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ranking;

import React, { Children } from "react";
import styles from "./Dashboard.module.css";
import Icon from "../Icons/Icon";
import Card from "../Card/Card";
import SingleProduct from "../SingleProduct/SingleProduct";

import AirPods from "../../pic/AirPods.jpg";
import AppleDisplay from "../../pic/AppleDisplay.jpg";
import profitableSections from "../data/profitableSections.json";
import Ranking from "../Ranking/Ranking";

const Dashboard = () => {
  return (
    <>
      <header className="d-flex align-items-center p-1">
        <Icon icon="dashboard" width={22} />
        <h5 className="mb-0 ml-2">Dashboard</h5>
      </header>
      <div className={styles.grid}>
        <div className={styles.section1}>
          <Card headline="Best Seeling Product">
            <SingleProduct
              imgSrc={AirPods}
              imgAlt="AirPods Pro"
              amount="12.545"
              percentage="3.54"
              icon="usd"
              isUpTrend
            />
          </Card>
        </div>
        <div className={styles.section2}>
          {" "}
          <Card headline="Most Viewed Product">
            <SingleProduct
              imgSrc={AppleDisplay}
              imgAlt="AirPods Pro"
              amount="8.357"
              percentage="1.23"
              icon="eye"
            />
          </Card>
        </div>
        <div className={styles.section3}>
          {" "}
          <Card headline="Most Profitable Sections">
            <Ranking data={profitableSections} />
          </Card>
        </div>
        <div className={styles.section4}>
          {" "}
          <Card headline="Most Profitable Categories" />
        </div>
        <div className={styles.section5}>
          {" "}
          <Card headline="Top Selling Products" />
        </div>
        <div className={styles.section6}>
          {" "}
          <Card headline="Most Viewed Products" />
        </div>
        <div className={styles.section7}>
          {" "}
          <Card headline="General Statistics" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

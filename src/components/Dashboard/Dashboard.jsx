import React from "react";
import styles from "./Dashboard.module.css";
import Icon from "../Icons/Icon";

const Dashboard = () => {
  return (
    <>
      <header className="d-flex align-items-center p-4">
        <Icon icon="dashboard" width={22} />
        <h5 className="mb-0 ml-2">Dashboard</h5>
      </header>
      <div className={styles.grid}>
        <div className={styles.section1}>section1</div>
        <div className={styles.section2}>section2</div>
        <div className={styles.section3}>section3</div>
        <div className={styles.section4}>section4</div>
        <div className={styles.section5}>section5</div>
        <div className={styles.section6}>section6</div>
        <div className={styles.section7}>section7</div>
      </div>
    </>
  );
};

export default Dashboard;

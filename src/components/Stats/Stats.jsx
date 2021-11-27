import React from "react";
import StatsItem from "../StatsItem";

import styles from "./Stats.module.css";

const Stats = () => {
  return (
    <div className="d-flex justify-content-around w-100 text-center ">
      <StatsItem number="3456" description="items On Sale" />
      <StatsItem number="432" description="Sales this month" />
    </div>
  );
};

export default Stats;

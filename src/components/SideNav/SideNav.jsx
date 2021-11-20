import React from "react";

import styles from "./SideNav.module.css";

import SideNavLink from "../SideNavLinks";
import Icon from "../Icons/Icon";

const SideNav = () => {
  const menu = [
    "dashboard",
    "tasks",
    "grid",
    "list",
    "basket",
    "user",
    "stats",
  ];
  return (
    <aside className={styles.sideNav}>
      <div className={styles.image}></div>
      <SideNavLink menu={menu} />
      <Icon icon="arrow" />
    </aside>
  );
};

export default SideNav;

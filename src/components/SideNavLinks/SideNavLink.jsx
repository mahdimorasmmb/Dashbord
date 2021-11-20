import React from "react";
import Icon from "../Icons/Icon";

const SideNavLink = ({ menu }) => {
  return (
    <div>
      {menu.map((item, index) => (
        <div key={`${item}-${index}`} className="mb-4">
          <Icon icon={item} color="#C3CAD9" />
        </div>
      ))}
    </div>
  );
};

export default SideNavLink;

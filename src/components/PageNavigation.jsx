import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <div className="my-5 text-sm">
      <NavLink to="/" className="text-violet-700">
        {"Home "}
      </NavLink>
      / {title}
    </div>
  );
};

export default PageNavigation;

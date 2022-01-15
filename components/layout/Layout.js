import React from "react";
import Notify from "../Notify/notify";
const Layout = ({ children }) => {
  return (
    <div>
      <Notify />
      {children}
    </div>
  );
};

export default Layout;

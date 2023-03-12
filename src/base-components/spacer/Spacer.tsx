import React from "react";
import SSpacer from "./Styles/SSpacer";

const Spacer = (props) => {
  return <SSpacer {...props}>{props.children}</SSpacer>;
};

export default Spacer;

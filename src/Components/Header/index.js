import React from "react";
import "./style.css";

const header = props => {
  return <header className="header">{props.children}</header>;
};

export default header;

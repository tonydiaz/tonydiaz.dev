// src/gatsby-theme-blog/components/header.js
import React from "react";
import Header from "gatsby-theme-blog/src/components/header";

export default (props) => {
  return (
    <Header {...props}>
      <div style={{ color: "red" }}>My custom header</div>
    </Header>
  );
};

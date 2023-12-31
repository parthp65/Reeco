import React from "react";
import Header from "../Header";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;

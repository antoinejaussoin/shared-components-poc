import React from "react";
import GlobalStyles from "./GlobalStyles";

export default ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

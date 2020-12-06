// ** @jsx jsx *
import React, { createContext, useState, useEffect } from "react";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../styles/theme";
export const Provider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

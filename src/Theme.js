import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  main: 'linear-gradient(to left, #75b3b6, #3376ad)',
  second: '-webkit-linear-gradient(45deg, #0066a2, #6cd0f3, #00ff95)',
  background: '#232529',
  btnBasic: '#fff',
  arrowBtnBasic: '#6cd0f3',
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

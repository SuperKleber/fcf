/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import React from "react";
import Seo from "./Seo";

const Layout = ({ children }) => {
  const { theme } = useThemeUI();
  return (
    <div
      sx={{
        fontFamily: "body",
      }}
    >
      <Seo
        title={"Federación Cruceña de Freestyle"}
        image="/img/logo.png"
        logo="/img/logo.png"
        color={theme.colors.primary}
      />
      <div>{children}</div>
      <style jsx="true" global="true">{`
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          scroll-behavior: smooth;
        }
        button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Layout;

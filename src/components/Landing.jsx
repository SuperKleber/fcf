/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React from "react";
import Document from "./Document";

const Landing = () => {
  return (
    <div>
      <div
        sx={{
          variant: "div.flexColumn",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "400px",
          // backgroundColor: "primary",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/img/banner.png)",
          backgroundAttachment: "fixed",
          backgroundPositionY: "-200px",
          backgroundPositionX: "center",
          backgroundSize: "cover",
        }}
      >
        <div sx={{ variant: "div.flexColumn" }}>
          <img sx={{ width: 150 }} src="/img/logo.png" alt="logo fcf" />
          <h1>Federación Cruzeña Freestyle </h1>
          <Button as={"a"} href="#statuto">
            Ver estatutos de la FCF
          </Button>
        </div>
      </div>
      <br />
      <div id="statuto" sx={{ color: "text", paddingLeft: 4, paddingRight: 4 }}>
        <Document />
      </div>
    </div>
  );
};

export default Landing;

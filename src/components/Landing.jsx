/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React from "react";
import Document from "./Document";
import { BiLike } from "react-icons/bi";
import { FacebookProvider, Like } from "react-facebook";
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
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/img/banner2.png)",
          backgroundAttachment: "fixed",
          backgroundPositionY: "-200px",
          backgroundPositionX: "center",
          backgroundSize: "cover",
        }}
      >
        <div sx={{ variant: "div.flexColumn" }}>
          <img sx={{ width: 150 }} src="/img/logo.png" alt="logo fcf" />
          <h1 sx={{ fontSize: [3, 4] }}>Federación Cruceña Freestyle </h1>
          <Button as={"a"} href="#statuto">
            Ver estatutos de la FCF
          </Button>
          <br />
          <FacebookProvider appId="374737403616201" language="es_ES">
            {/* <Button
              sx={{ backgroundColor: "#3b5998" }}
              as={"a"}
              href="#statuto"
            >
              <BiLike sx={{ fontSize: 3, marginRight: 1 }} /> Apoya a
              #BoliviaEnFMS
            </Button> */}
            <div
              sx={{
                variant: "div.flexColumn",
                width: 200,
                "& iframe": {
                  width: "170px !important",
                },
                backgroundColor: "text",
                color: "background",
                borderRadius: 1,
                padding: 2,
              }}
            >
              <div sx={{ fontSize: 1, marginBottom: 1 }}>
                Apoya a #BoliviaEnFMS
              </div>
              <div
                sx={{
                  "& *": {
                    width: "170px !important",
                  },
                }}
              >
                <Like
                  layout="button_count"
                  width={"170px"}
                  href="https://boliviaenfms.netlify.app"
                  colorScheme="light"
                  share
                ></Like>
              </div>
              <div sx={{ fontSize: 1, marginBottom: 1 }}>👆 Like = Apoyo</div>
            </div>
          </FacebookProvider>
        </div>
      </div>
      <br />
      <div id="statuto" sx={{ color: "text", paddingLeft: 4, paddingRight: 4 }}>
        <Document />
      </div>
      <div sx={{ width: "100vw" }}>
        <img sx={{ width: "100%" }} src="/img/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;

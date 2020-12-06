import { jsx, InitializeColorMode } from "theme-ui";
import React, { useState } from "react";

import { Provider } from "./src/components/context.jsx";

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    jsx(InitializeColorMode, { key: "theme-ui-no-flash" }),
  ]);
};

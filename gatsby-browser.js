import React, { useState } from "react";

import { Provider } from "./src/components/context.jsx";

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};

export default {
  colors: {
    background: "#092532",
    text: "#f7f7ee",
    primary: "#4e8d7c",
    secondary: "#ea97ad",
  },
  radii: [4, 8, 16],
  fonts: {
    body: "Montserrat",
    heading: "Nerko One",
    monospace: "monospace",
  },
  styles: {},
  div: {
    flex: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    flexWrap: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    flexColumn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
  buttons: {
    default: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    primary: {
      variant: "buttons.default",
    },
  },
};

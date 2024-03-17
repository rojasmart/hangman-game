import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    customColor: {
      50: "#f2f2f5",
      100: "#d8d8df",
      200: "#bfbfc8",
      300: "#a6a6b2",
      400: "#8c8c9b",
      500: "#737384",
      600: "#59596d",
      700: "#404056",
      800: "#26263f",
      900: "#0d0d29",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

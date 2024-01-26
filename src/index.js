import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Button, Tabs, Menu } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import store from "../src/Redux/store";
import { Provider } from "react-redux";

const theme = extendTheme({
  components: {
    Button,
    Tabs,
    Menu,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);

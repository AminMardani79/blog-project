import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { globalTheme } from "./mui/theme";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "./mui/configRtl";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={globalTheme}>
        <CacheProvider value={cacheRtl}>
          <Provider store={store}>
            <App />
          </Provider>
        </CacheProvider>
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

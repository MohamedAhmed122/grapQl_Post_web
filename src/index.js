import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./ApolloProvider";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

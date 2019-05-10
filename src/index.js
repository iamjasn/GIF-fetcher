import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import "./index.css";
import App from "./App";

const initialState = {};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./App", () => {
    render();
  });
}

import React from "react";
import ReactDOM from "react-dom";
import {store,persistor} from "./store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./Components/App";

import { PersistGate } from "redux-persist/integration/react";


const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>

<PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  root
);

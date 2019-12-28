import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "mobx-react";
import { TodoStore, DoingStore, CompleteStore } from "./stores/todoStore";

const todoStore = new TodoStore();
const doingStore = new TodoStore();
const completeStore = new TodoStore();

ReactDOM.render(
  <Provider
    todoStore={todoStore}
    doingStore={doingStore}
    completeStore={completeStore}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

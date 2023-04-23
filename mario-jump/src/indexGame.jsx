import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const Game = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default Game;

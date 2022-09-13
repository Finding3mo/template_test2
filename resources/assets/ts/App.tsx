/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require("../js/bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import Description from "./components/Description";
import Game from "./components/Game";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Description />
      <Game />
    </>
  );
};

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}

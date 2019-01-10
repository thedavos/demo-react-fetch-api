import React from "react";
import { render } from "react-dom";
import Home from "./Home";
import data from "./data";

const headings = ["When", "Who", "Description"];

const app = document.getElementById("app");
render(
  <Home data={data} title={"Open Library Api"} headings={headings} />,
  app
);

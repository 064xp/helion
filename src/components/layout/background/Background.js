import React from "react";
import starTile from "../../../img/stars_tile.jpg";
import "./background.css";

const background = props => {
  return <div id="background" style={{ background: `url(${starTile})` }} />;
};

export default background;

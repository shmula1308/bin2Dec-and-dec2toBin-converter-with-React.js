import React from "react";
import image from "../../assets/binarynumbers.png";
import classes from "./Cockpit.module.css";

const Cockpit = () => {
  return (
    <div className={classes.Cockpit}>
      <h1 className={classes.title}>Binary to decimal converter</h1>
      <img
        className={classes.logo}
        src={image}
        alt="Screen with binary numbers"
      />
    </div>
  );
};

export default Cockpit;

import React from "react";
import image from "../../assets/binarynumbers.png";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {

  return (
    <div className={classes.Cockpit}>
      <h1 className={classes.title}>{props.change ? 'Binary to decimal converter':'Decimal to binary converter'}</h1>
      <img
        className={classes.logo}
        src={image}
        alt="Screen with binary numbers"
      />
    </div>
  );
};

export default Cockpit;

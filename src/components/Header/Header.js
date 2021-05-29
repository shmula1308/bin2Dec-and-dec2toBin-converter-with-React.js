import React from "react";
import image from "../../assets/binarynumbers.png";
import classes from "./Header.module.css";

const Header = (props) => {

  return (
    <header>
      <div className={classes.Cockpit}>
        <h1 className={classes.title}>{props.change ? 'Binary to decimal converter':'Decimal to binary converter'}</h1>
        <img
          className={classes.logo}
          src={image}
          alt="Screen with binary numbers"
        />
      </div>
    </header>
  );
};

export default Header;

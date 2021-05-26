import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header>
          <Cockpit />
        </header>
      </div>
    );
  }
}

export default App;

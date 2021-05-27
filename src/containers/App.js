import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.module.css";
import Form from '../components/Form/Form'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header>
          <Cockpit />
          <Form/>
        </header>
      </div>
    );
  }
}

export default App;

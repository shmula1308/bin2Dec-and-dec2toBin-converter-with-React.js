import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Select from '../components/Select/Select'
import Input from '../components/Input/Input'
import Buttons from '../components/Buttons/Buttons'
import ResultBox from '../components/ResultBox/ResultBox'
import classes from "./App.module.css";


import { faSync,faTimes,faRetweet  } from '@fortawesome/free-solid-svg-icons'

// import Form from '../components/Form/Form'

class App extends Component {
   
   state = {
      bin2Dec: true
   }

   swapHandler = () => {
      let converter = this.state.bin2Dec;
      this.setState({bin2Dec: !converter})
   }
 
  render() {
    return (
      <div className={classes.App}>
        <header>
          <Cockpit change={this.state.bin2Dec}/>
        </header>
        <main>
        <form className="form">
            <Select change={this.state.bin2Dec}/>
            <Input change={this.state.bin2Dec}/>
            <Buttons icon={faSync} title='Convert' click={this.swapHandler}/>
            <Buttons icon={faTimes} title='Reset' click={this.swapHandler}/>
            <Buttons icon={faRetweet} title='Swap' click={this.swapHandler}/>
            <ResultBox change={this.state.bin2Dec}/>
        </form>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Select from '../components/Select/Select'
import Input from '../components/Input/Input'
import Buttons from '../components/Buttons/Buttons'
import ResultBox from '../components/ResultBox/ResultBox'
import classes from "./App.module.css";


import { faSync,faTimes,faRetweet  } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
   
   state = {
      bin2Dec: true,
      fromDefaultValue: 'binary',//lowercase
      toDefaultValue: 'decimal'
   }

   swapHandler = () => {
      let converter = this.state.bin2Dec;
      this.setState({bin2Dec: !converter})
      
      if(this.state.fromDefaultValue === 'binary') {
        this.setState({fromDefaultValue:'decimal',toDefaultValue:'binary'})
      } else {
        this.setState({fromDefaultValue: 'binary',toDefaultValue:'decimal'})
      }
   }

   onChangeHandler = (ev) => {
     if(ev.target.id === 'from' && ev.target.value === 'decimal'){
       this.setState({fromDefaultValue:'decimal',toDefaultValue:'binary'})
       this.swapHandler()
     }
     if(ev.target.id === 'from' && ev.target.value === 'binary'){
      this.setState({fromDefaultValue: 'binary',toDefaultValue:'decimal'})
      this.swapHandler()
    }
    if(ev.target.id === 'to' && ev.target.value === 'binary'){
      this.setState({fromDefaultValue: 'decimal',toDefaultValue:'binary'})
      this.swapHandler()
    }
    if(ev.target.id === 'to' && ev.target.value === 'decimal'){
      this.setState({fromDefaultValue: 'binary',toDefaultValue:'decimal'})
      this.swapHandler()
    }
   }

   
  render() {

    const CSS = {
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom: '1.5em'
    }

    return (
      <div className={classes.App}>
        <header>
          <Cockpit change={this.state.bin2Dec}/>
        </header>
        <main>
        <form className="form">
          <div style={CSS}>
            <Select 
            change={this.onChangeHandler}
            id='from'
            label='From'
            value={this.state.fromDefaultValue} 
            
            />
            <Select 
            change={this.onChangeHandler}
            id='to'
            label='To'
            value={this.state.toDefaultValue} 
            />
          </div>
            <Input change={this.state.bin2Dec}/>
            <Buttons icon={faSync} title='Convert'/>
            <Buttons icon={faTimes} title='Reset'/>
            <Buttons icon={faRetweet} title='Swap' click={this.swapHandler}/>
            <ResultBox change={this.state.bin2Dec}/>
        </form>
        </main>
      </div>
    );
  }
}

export default App;

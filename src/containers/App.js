import React, { Component } from "react";
import Header from "../components/Header/Header";
import Select from '../components/Select/Select'
import Input from '../components/Input/Input'
import Button from '../components/Buttons/Button'
import ResultBox from '../components/ResultBox/ResultBox'
import classes from "./App.module.css";
import { faSync,faTimes,faRetweet  } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
   
   state = {
      bin2Dec: true,
      fromDefaultValue: 'binary', //has to be lowercase. 
      toDefaultValue: 'decimal',
      userInput: '',
      conversionResult: '',
      alertWrongInput: false,
      reset: false
   }

   userInputHandler = (ev) => {
      this.setState({userInput: ev.target.value})
   }

   validateBinaryHandler = (str) => {
    if(str.split("").some(num => num !== '0' && num !== '1')) {
      this.setState({alertWrongInput: true})
      return false;
    } else {
      this.setState({alertWrongInput: false})
    }
    return true;
  }

   convertHandler = () => {
     if(this.state.bin2Dec) {
      if(!this.validateBinaryHandler(this.state.userInput) || !this.state.userInput.length ) return;
      const digit = parseInt(this.state.userInput, 2);
      this.setState({conversionResult: digit})
     } else {
       if(!this.state.userInput) return;
      const digit = Number(this.state.userInput).toString(2);
      this.setState({conversionResult: digit})
     }
   }


   swapHandler = () => {
      let direction = this.state.bin2Dec;
      this.setState
       ({bin2Dec: !direction,
        conversionResult: '',
        userInput: '',
        alertWrongInput: false
      })
      
      if(this.state.fromDefaultValue === 'binary') {
        this.setState({fromDefaultValue:'decimal',toDefaultValue:'binary'})
      } else {
        this.setState({fromDefaultValue: 'binary',toDefaultValue:'decimal'})
      }
   }

   resetFormHandler = () => {
      this.setState({
        bin2Dec: true,
        fromDefaultValue: 'binary', 
        toDefaultValue: 'decimal',
        userInput: '',
        conversionResult: '',
        alertWrongInput: false,
        reset: false
     })
   }

   onChangeHandler = (ev) => {
     if(ev.target.id === 'from' && ev.target.value === 'decimal'){
       this.setState({fromDefaultValue:'decimal',toDefaultValue:'binary'})
     }
     if(ev.target.id === 'from' && ev.target.value === 'binary'){
      this.setState({fromDefaultValue: 'binary',toDefaultValue:'decimal'})
    }
    if(ev.target.id === 'to' && ev.target.value === 'binary'){
      this.setState({fromDefaultValue: 'decimal',toDefaultValue:'binary'})
    }
    if(ev.target.id === 'to' && ev.target.value === 'decimal'){
      this.setState({fromDefaultValue: 'binary',toDefaultValue:'decimal'})
    }

    let direction = this.state.bin2Dec;
      this.setState
       ({bin2Dec: !direction,
        conversionResult: '',
        userInput: '',
        alertWrongInput: false
    })
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
          <Header change={this.state.bin2Dec}/>
        <main>
        <form className="form">
          <div style={CSS}>
            <Select 
            change={this.onChangeHandler}
            id='from'
            label='From'
            value={this.state.fromDefaultValue} //doesnt have to be named value on component, but it has to be value or defaultValue on the element.
            />
            <Select 
            change={this.onChangeHandler}
            id='to'
            label='To'
            value={this.state.toDefaultValue} 
            />
          </div>
            <Input direction={this.state.bin2Dec} change={this.userInputHandler} value={this.state.userInput} alert={this.state.alertWrongInput} />
            <Button icon={faSync} title='Convert' click={this.convertHandler} />
            <Button icon={faTimes} title='Reset'click={this.resetFormHandler}/>
            <Button icon={faRetweet} title='Swap' click={this.swapHandler}/>
            <ResultBox direction={this.state.bin2Dec} result={this.state.conversionResult}/>
        </form>
        </main>
      </div>
    );
  }
}

export default App;

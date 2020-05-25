// This is the most important class in the React App as it lists all the actions the app is meant to handle
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

// A constructor that sets a default value for the calculator when no value is selected
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  //Below are various functions the calculator can perform such as allowing numbers/decimals/zeros to show in the input box 
  addToInput = val => {
    this.setState({ input: this.state.input + val});
  };
  //the if statement check is the position of the decimal is -1 which also means whether it does not appear, and add the decimal point if this 
  //is the case
  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1){
      this.setState({ input: this.state.input + val});
    }
  
  };
   //The if statement here check is there is no 0 present, a zero will be added to the input
  addZeroToInput = val => {
    if(this.state.input !== ""){
      this.setState({ input: this.state.input + val});
    }
  };
  //The next 5 methods sets a default value for the input, state, and operator depending on what operation is to be performed
  clearInput = () => {
    this.setState({ input: ""});
  };

  add = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "plus";
  };

  subtract = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "minus";
  };

  divide = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "divide";

  };

  multiply = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "product";

  };

  root = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "root";

  };

  exponent = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "exponent";

  };

  percent = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "percent";

  };

  pi = val => {
    this.setState({ input: 3.141592653589793});
  };

  negative = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "negative";

  };

  sine = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "sine";

  };

  cosine = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "cosine";

  };

  tangent = () => {
    this.setState.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.setState.operator = "tangent";

  };
 //The evaluate method first declares the current number as the input and implements if/else if statements that will perform specific operations if 
 //there is a matching string value "plus"/"minus"/"divide"/"product". Note this acts identically to a switch statement.
  evaluate = () =>{
    this.setState.currentNumber = this.state.input

    if (this.setState.operator === "plus"){
      this.setState({
        input: parseFloat(this.setState.previousNumber) + parseFloat(this.setState.currentNumber)
      });
    } else if (this.setState.operator === "minus"){
      this.setState({
        input: parseFloat(this.setState.previousNumber) - parseFloat(this.setState.currentNumber)
      });
    } else if (this.setState.operator === "divide"){
      this.setState({
        input: parseFloat(this.setState.previousNumber) / parseFloat(this.setState.currentNumber)
      });
    } else if (this.setState.operator === "product"){
      this.setState({
        input: parseFloat(this.setState.previousNumber) * parseFloat(this.setState.currentNumber)
      });
    } else if (this.setState.operator === "root"){
        this.setState({
          input: Math.sqrt(parseFloat(this.setState.currentNumber))
        });
    } else if (this.setState.operator === "exponent"){
      this.setState({
        input: Math.pow(parseFloat(this.setState.previousNumber), parseFloat(this.setState.currentNumber))
      });
    } else if (this.setState.operator === "percent"){
      this.setState({
        input: parseFloat(this.setState.previousNumber)/100
      });
    } else if (this.setState.operator === "negative"){
      this.setState({
        input: -parseFloat(this.setState.currentNumber)
      });
    } else if (this.setState.operator === "sine"){
      this.setState({
        input: Math.sin(parseFloat(this.setState.currentNumber))
      });
    } else if (this.setState.operator === "cosine"){
      this.setState({
        input: Math.cos(parseFloat(this.setState.currentNumber))
      });
    } else if (this.setState.operator === "tangent"){
      this.setState({
        input: Math.tan(parseFloat(this.setState.currentNumber))
      });

  };
  }
  //The below render function creates our Application and calculator features (Buttons, Input) so that they appear in the webpage 
  //and can also be referred to by the components 
  render() {
  return (
   <div className="App">
    <div className="calc-wrapper">
     <div className="row">
        <Input>{this.state.input}</Input>
      </div>
    <div className="row">
        <Button handleClick={this.addToInput}
        >7</Button>
        <Button handleClick={this.addToInput}>8</Button>
        <Button handleClick={this.addToInput}>9</Button>
        <Button handleClick={this.divide}>÷</Button>
        <Button handleClick={this.root}>√</Button>
        <Button handleClick={this.negative}>(-)</Button>   
    </div>
      <div className="row">
        <Button handleClick={this.addToInput}>4</Button>
        <Button handleClick={this.addToInput}>5</Button>
        <Button handleClick={this.addToInput}>6</Button>
        <Button handleClick={this.multiply}>×</Button>
        <Button handleClick={this.exponent}>EXP</Button>
        <Button handleClick={this.sine}>sin</Button>   
      </div>
      <div className="row">
        <Button handleClick={this.addToInput}>1</Button>
        <Button handleClick={this.addToInput}>2</Button>
        <Button handleClick={this.addToInput}>3</Button>
        <Button handleClick={this.add}>+</Button>
        <Button handleClick={this.percent}>%</Button>
        <Button handleClick={this.cosine}>cos</Button>   
      </div>
      <div className="row">
        <Button handleClick={this.addDecimal}>.</Button>
        <Button handleClick={this.addZeroToInput}>0</Button>
        <Button handleClick={this.evaluate}>=</Button>
        <Button handleClick={this.subtract}>-</Button>
        <Button handleClick={this.pi}>π</Button>
        <Button handleClick={this.tangent}>tan</Button>      
       </div>
       <div className="row">
         <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
      </div> 
     </div>   
    </div>
   );
  }
}

export default App;


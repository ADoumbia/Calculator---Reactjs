//The JavaScript brings our buttons to "life" by creating an eventlistener through the handleClick method
import React, { Component } from 'react';
import './Button.css';

//This statement allows the calculator to recognize what is not a value, which in this case is a . or an = sign
class Button extends Component{
    isOperator = val => {
        return !isNaN(val) || val === "."||val === "=";
    };
//This method acts like an eventListener which will prop the children or in other terms, will bring display the child elements of the button class
//which includes the value the button holds
  render() {
    return( 
    <div 
        className={`button ${this.isOperator(this.props.children) ? "" : "operator"}`}
        onClick={() => this.props.handleClick(this.props.children)}        
        > 
        {this.props.children}
    </div>
     )
    }
}
export default Button;

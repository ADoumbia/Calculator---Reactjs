/* The JavaScript simply tells us that the input will prop the values of the child components in the App.js*/
import React, { Component } from 'react';
import './Input.css';


class Input extends Component{
  render() {
    return( 
    <div className="input">
        {this.props.children}
        
    </div>
     )
    }
}
export default Input;
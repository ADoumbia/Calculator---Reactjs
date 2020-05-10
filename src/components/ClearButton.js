/* This JavaScript lets us decide how this button will act upon a click*/
import React, { Component } from 'react';
import './ClearButton.css';


class ClearButton extends Component{
  render() {
    return( 
    <div className="clear-btn"
    onClick={() => this.props.handleClear()}
    >
           {this.props.children}
        
    </div>
     )
    }
}
export default ClearButton;
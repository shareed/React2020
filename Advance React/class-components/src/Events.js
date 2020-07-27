import React, { Component } from 'react';
import './App.css';

class Events extends Component {
   constructor() {
      super();
      this.state = {
          input: ''
      };
   }


         handleSingleClickEvent = () => alert("Single Click Event Triggered")
         handleDoubleClickEvent = () => alert("Double Click Event Triggered")
         handleMouseEnter = () => alert("Mouse Enter Event Triggered")
         handleMouseLeave = () => alert("Mouse Leave Event Triggered")
         handelInputChange = e => {
            this.setState({input: e.target.value})
            console.log(e.target.value)
          
         }


  render() {
     return (
        <div className = 'events'>
        <h1>Event Handlers</h1>
        <button onClick = {this.handleSingleClickEvent}>Single Click handler</button>
        <button onDoubleClick = {this.handleDoubleClickEvent}>Double click handler</button>
        <div onMouseEnter = {this.handleMouseEnter}>Mouse Enter</div>
        <div onMouseLeave = {this.handleMouseLeave}>Mouse Leave</div>
        <input onChange = {this.handelInputChange} type = "text" placeholder = "Change Me" />
        <p>{ this.state.input }</p>
        </div>
     );
  }
}

export default Events;
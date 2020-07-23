import React from 'react';
import './App.css';

import Message from './Message';
import Events from './Events'

class App extends React.Component {
    constructor() {
    super();
    this.state = {
        name: 'Shannon',
        message: 'Hello how are you my name is',
        message2: ''
    };
    }

      handleChange = e => {
        this.setState({message2: e.target.value})
      }

    render() {
        return (
           <div className = 'App'>
             {this.state.message}, {this.state.name}
             <Message name = {this.state.name}  message = {this.state.message}/>
              <div className = 'input'>
                <input onChange = {this.handleChange}/>
                <p>{this.state.message2}</p>
              </div>
             <Events />
           </div>
        )
    }

}


export default App;

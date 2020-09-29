import React from 'react';
import './App.css';
function Message (props) {

  
     return (
        <div class = 'message'>
        <p>This is from the message component</p>
        {props.message}, {props.name}
        </div>
     )
}
export default Message;
import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "list-style-div" 
                onClick = { () =>  this.props.toggleCompleted (this.props.todo.id) }
                className = {this.props.todo.completed ? "completed" : "not-completed"}>
                    
                {this.props.todo.task}

            </div>

        );
    }
}

export default Todo;
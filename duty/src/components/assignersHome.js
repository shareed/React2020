import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";

class AssignersHome extends React.Component {
  state = {
    newToDo: ""
  };

  handleChanges = e => {
    this.setState({ newToDo: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.todos.map((todo, index) => (
            <h4 key={index}>
              {todo.task}
              {todo.reedStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newToDo}
          onChange={this.handleChanges}
          placeholder="Add new todo"
        />
        <button
          onClick={() => {
            this.props.addToDo(this.state.newToDo);
          }}
        >
          Add ToDo
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

const mapDispatchToProps = { addToDo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignersHome);

import React from "react";

import { connect } from "react-redux";

import { addTodo, removeTodo, toggleTodo } from "../Actions";

class TodoList extends React.Component {
  state = {
    todos: [],
    inputField: ""
  };

  handleChanges = e => {
    this.setState({
      inputField: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();

    this.props.addTodo(this.state.inputField);
    this.setState ({ inputField: ""})
  };

  toggleTodo = id => {
      this.props.toggleTodo(id)
  }

  render() {
    
    return (
      <div>

        <div>
          {this.props.todos && this.props.todos.map(todo => (
              <h3 onClick={ () => this.toggleTodo(todo.id)} key={todo.id}>
                {todo.todo}
                {todo.status && <i class="fas fa-check" />}
              </h3>
          ))}
        </div>

        <input 
        type='text'
        value={this.state.newTodo}
        onChange={this.handleChanges} 
        placeholder="What to do..." 
        />

        <button onClick={this.addTodo}> Add </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, toggleTodo }
)(TodoList);

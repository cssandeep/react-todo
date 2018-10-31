import React, { Component } from 'react'
import Todo from './Todo';
class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: []

    }
  }
  
  addTodo() {
    let todoValue = this.todoInput.value;
    let newTodos = this.state.todos
    newTodos.push(todoValue)
    this.setState({
      todos: newTodos
    })
   this.todoInput.value = ""
  }
  removeTodo(id) {
    let todos = this.state.todos.filter((todo,index) => {
       return id !== index
    })
  this.setState({
    todos: todos
  })
  }
  render() {
    return (
      <div>
            <h1>React Todo</h1>
            
            <input type="text" placeholder="Enter Todo" ref={(input) => this.todoInput = input}/>  
            <button onClick={this.addTodo.bind(this)}>Add</button>
            <p>Tod's count: {this.state.todos.length}</p>
            <ul>
              { this.state.todos.map((todo, index) => {
                return (<Todo id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)}/>)
              })
              }
            </ul>
      </div>
    );
  }
}
export default App;
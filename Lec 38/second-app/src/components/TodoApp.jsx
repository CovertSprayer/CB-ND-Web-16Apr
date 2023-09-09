import React, { useState } from 'react'
import InputForm from './InputForm'
import TodoList from './TodoList'
import {v4 as uuid} from 'uuid'

const TodoApp = () => {

  const dummy_todos = [
    {id:uuid(), text:'Buy Groceries'},
    {id:uuid(), text:'Learn React'},
    {id:uuid(), text:'Go to Gym'},
    {id:uuid(), text:'Make food'},
  ]
  
  const [todos, setTodos] = useState([]);

  function deleteTodo(id){
    const newTodos = todos.filter(item => item.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  }

  function addTodo(todo){
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  return (
    <div>
        <InputForm todos={todos} addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodoApp
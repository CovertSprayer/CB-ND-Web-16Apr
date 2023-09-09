import React, { useState } from 'react'
import InputForm from './InputForm'
import TodoList from './TodoList'

const TodoApp = () => {

  const dummy_todos = [
    {id:1, text:'Buy Groceries'},
    {id:2, text:'Learn React'},
    {id:3, text:'Go to Gym'},
    {id:4, text:'Make food'},
  ]
  
  const [todos, setTodos] = useState(dummy_todos);
  return (
    <div>
        <InputForm/>
        <TodoList todos={todos}/>
    </div>
  )
}

export default TodoApp
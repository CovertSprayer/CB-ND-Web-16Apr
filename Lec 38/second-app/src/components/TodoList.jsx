import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

  const todoList = props.todos.map(item => {
    return <Todo key={item.id} item={item}/>
  })

  return (
    <div>
        {todoList}
    </div>
  )
}

export default TodoList
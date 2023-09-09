import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs'

const Todo = (props) => {

  return (
    <li>
        <span>id-{props.item.id} :-- {props.item.text}</span>
        <span onClick={()=>props.deleteTodo(props.item.id)}><BsFillTrashFill/></span>
    </li>
  )
}

export default Todo
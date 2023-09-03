import React from 'react'
import './Person.css'

const Person = (props) => {
  return (
    <div style={{backgroundColor:'teal', color:'white'}}>
        <h1>Name: {props.name}</h1>
        <p>Role: {props.role}</p>
        <p>Age: {props.age}</p>
    </div>
  )
}

export default Person
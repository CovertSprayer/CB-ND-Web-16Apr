import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
        <h2>Quote App</h2>
        <ul>
            <li><a href="/">All Quotes</a></li>
            <li><a href="/new">New Quote</a></li>
        </ul>
    </nav>
  )
}

export default Navigation
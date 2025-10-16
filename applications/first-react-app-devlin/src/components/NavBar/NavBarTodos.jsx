import React from 'react'
import { Link } from "react-router";
export default function NavBarTodos() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo/new"></Link>New Todo</li>
            <li><Link to="/todos"></Link>All Todos</li>
        </ul>
    </nav>
  )
}

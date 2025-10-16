import React from 'react'

export default function DisplayTodos({ todos }) {
    // const { text, amount, done } = todo;

  return (
    <ul>DisplayTodos
        <li>Text: {todos.text}</li>
        <li>Amount: {todos.amount}</li>
        <li>Done: {todos.done ? "Completed" : "Incomplete"}</li>
    </ul>
  )
}

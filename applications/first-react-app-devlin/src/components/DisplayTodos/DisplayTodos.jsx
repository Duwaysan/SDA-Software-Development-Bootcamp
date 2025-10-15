import React from 'react'

export default function DisplayTodos({ todo: { text, amount, done } }) {
    // const { text, amount, done } = todo;

  return (
    <ul>DisplayTodos
        <li>Text: {text}</li>
        <li>Amount: {amount}</li>
        <li>Done: {done ? "Completed" : "Incomplete"}</li>
    </ul>
  )
}

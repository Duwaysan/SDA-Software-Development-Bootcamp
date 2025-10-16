import "./App.css";
import { useState, useEffect } from "react";
import TodoForm from "./components/Forms/TodoForm";
import DisplayTodos from "./components/DisplayTodos/DisplayTodos";
import PasswordValidation from "./components/Forms/PasswordValidation";
import NavBarTodos from "./components/NavBar/NavBarTodos"
import { Route, Routes } from 'react-router';

const App = () => {
  const [todos, setTodos] = useState([
    { amount: 0, text: 'Learn JavaScript', done: true },
    { amount: 10, text: 'Learn JSX', done: false },
    { amount: 40, text: 'Learn HTML', done: true },
    { amount: 67, text: 'Learn CSS', done: true },
    { amount: 99, text: 'Master React', done: false },
  ])

  useEffect(function () {
    console.log("This is from the use effect")
  }, [todos])


  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo])
  }

  const displayedTodos = todos.map((todo, idx) => (
    <DisplayTodos key={idx} todo={todo}  />
  ))

  return (<>
  <NavBarTodos/>
      <h1>Day 03</h1>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/todo/new" element={<TodoForm handleAddTodo={handleAddTodo}/>}/>
        <Route path="/todos" element={<DisplayTodos todos={todos}/>}/>
      </Routes>
  </>
  );
};

export default App;

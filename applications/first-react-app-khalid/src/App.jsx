import './App.css'
import Profile from './Profile'

function App() {
 const person = {
  "firstName": "Khalid",
  "lastName": "Alduwaysan",
  age:22,
  young: false,
 }

   const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];
  
 const todo =  {text: 'Master React', done: false}

 const color  = person.young?"red":"green"
  return (<>
    <h1>This is the first react application</h1>
    <h1> Khalid is {person.age} </h1>
    <h3 style={{color: `${person.young? "red":"yellow"}`}}>Is Khalid young? {person.young? "yes": "no"}</h3>
    {person.age === 22 && <h3>That is 22</h3>} 
    <Profile/>
    
      {todos.map(todo => (
        
        <ul>
        <li>{todo.text}</li>
        <li>{todo.text}</li>
        </ul>
      )
        
      )}
    </>
  )
}

export default App

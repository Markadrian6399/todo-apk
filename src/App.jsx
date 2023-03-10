import { useState } from "react"
import TodoForm from "./componets/todoForm/TodoForm"
import TodoList from "./componets/todoList/TodoList"


function App() {
  let todosfromstorage = JSON.parse(localStorage.getItem("todos")) || [];
  const[todos, setTodos]= useState(todosfromstorage)
  
  console.log(todos.length);
  return (
    <div className="container">
      <header>
        <h1><span>Todo</span>App</h1>
        <h3>Youngmk</h3>
      </header>
      <TodoForm setTodos={setTodos} todos={todos}/>
      {
        (todos.length < 1) &&
          <p style={{color: "white", marginTop:"20px", fontSize:"24px"}}>please start adding todos</p>
      }
      <TodoList todos={todos}  setTodos={setTodos}/>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <p style={{color:"red", fontSize:"10px", marginTop:"10px"}}>total task: {todos.length}</p>
        <p style={{color:"white", fontSize:"10px", marginTop:"10px"}}>completed {todos.filter(item =>{
        return item.Completed==true
        }).length}</p>
      </div>
    </div>
  )
}

export default App

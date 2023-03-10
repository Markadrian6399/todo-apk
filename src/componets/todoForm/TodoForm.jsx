import style from "./TodoForm.module.css"
import {useState,useEffect} from "react";


const TodoForm = ({setTodos, todos}) => {
    const [text, setText] = useState("")
    function add(e){
      e.preventDefault()
      
      setTodos((prev)=>{
        return[...prev,{name:text,Completed:false}]
      })
      
    }
    useEffect(()=>{localStorage.setItem ("todos",JSON.stringify(todos))},[todos])
  return (
    <div className={style.container}>
      <form>
        <input type="text" placeholder="Add todo" onChange={(e)=>{setText(e.target.value);}} />
        <button onClick={add}>+</button>
      </form>
    </div>
  )
}

export default TodoForm

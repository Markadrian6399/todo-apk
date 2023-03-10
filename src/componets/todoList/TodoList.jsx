import style from "./TodoList.module.css"
import Todo from "../Todo/Todo"
import { v4 as uuidv4 } from 'uuid';


const TodoList = ({todos,setTodos}) => {
  const handleComplete = (i) => {
    
   let update = todos.map((item, index) => {
      if (index === i){
        item.Completed = !item.Completed
      }
      return item;
    })
    setTodos(update)
  }
  return (

    <div>
      {
        todos.map((item, i)=>{
          return(
            <div onDoubleClick={()=>{
              handleComplete(i)
            }}>
               <Todo item={item} todos={todos} setTodos={setTodos} i ={i} key={uuidv4()}/>
            </div>
          )
        })
      }
    </div>

  )
}

export default TodoList

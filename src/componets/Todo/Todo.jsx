import { useState } from "react"
import style from "./Todo.module.css"

const Todo = ({item,todos,setTodos, i})=>{
    const[data, setData]= useState({
        name: item.name,
        Completed: item.Completed,
    })
    const [edit, setEdit]= useState(false)
    const handleDelet =() =>{
        setTodos(todos.filter((todo,index)=>{
            return index !==i 
        }))
    }
    return(
        <div className={style.contaner} id="contaner">
            <input type="text" value={data.name} onChange={(e)=>{
               setData((prev)=>{
                return{...prev,name:e.target.value}
               })
            }}
            readOnly={!edit}
            className={edit && style.editable}
             />
            <button onClick={()=> setEdit(!edit)}>{edit ? "Done" : "EDIT"}</button>
            <button onClick={handleDelet}>DELETE</button>
            <div className={item.Completed ? style.completed : undefined}></div>
        </div>
    )
}

export default Todo
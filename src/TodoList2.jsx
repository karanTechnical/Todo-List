import React, { useState } from "react";
import TodoList2Com from "./TodoList2Com";



const TodoList2 = ()=>{
    const [item,setItem] = useState('');
    const [newItem,setNewItem] = useState([]);

    const itemEvent= (event)=>{
        setItem(event.target.value);
    
    };
    const listOfItem = ()=>{
        setNewItem((prevValue)=>{
            return[...prevValue,item]

        })
        setItem('')
    }

    return(
    
<>
    <div className="main_div">
  
    <div className="center_div">
    <h1>ToDo List</h1>

    <input type='text' value={item} placeholder="Add an items" onChange={itemEvent}/>
  <button onClick={listOfItem}>+</button>
  <ol>
      

      {newItem.map((val,index)=>{
          return <TodoList2Com key = {index} text={val}/>
      })}
    
  </ol>

  

    </div>


    </div>
</>
     
      
 )

};
export default TodoList2;
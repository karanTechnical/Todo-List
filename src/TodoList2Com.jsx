import React, { useState } from "react";

const TodoList2Com = (props)=>{
    const [line,setLine] = useState(false);

    const cutIt = ()=>{
        setLine(true)

    }
    return (
    <div className="todo_style">

      <span onClick={cutIt}><i className="fa fa-trash"></i></span>

    <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
    </div>
    );


}
export default TodoList2Com;
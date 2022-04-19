import React from "react";
import { useState } from "react/cjs/react.development";
import Todolist from "./Todolist";



const Apps = () =>{

    const [inputList,setInputList] = useState();
    const [items,setItems] = useState([]);

    const itemEvent = (event)=>{
        setInputList(event.target.value);
    }

    const listOfItem = ()=>{
        setItems((olditem)=>{
            return [...olditem,inputList];
        });
        setInputList('');

    };
    const deletItems = (id)=>{
        console.log('delted');
        setItems((olditem)=>{
            return olditem.filter((arrElem,index)=>{
                return index !== id;

            })
        })

    }

return(
    <>
    <div className="main_div">
    <div className="center_div">
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputList}/>
    <button onClick={listOfItem}>+</button>
    <ol>
       { items.map((itemval,index)=>{

        return <Todolist 
        key={index}
         id={index} 
         text={itemval}
         onSelect = {deletItems}
         />;


        })}
    </ol>

    </div>

    </div>
    </>
)
}
export default Apps;
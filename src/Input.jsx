import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";


function Input({method}) {
  const [task , setTask] = useState("");
  const {list} = useContext(TodoContext);
 
  function handleClick(event) {
    event.preventDefault();
    console.log("i got clicked");

    const obj = {
      checked: false,
      todo: task
    }
    
   list.push(obj);
   setTask("");
   method(prevValue => !prevValue);
  }

  return (
    <form onSubmit = {(event) => handleClick(event)} className="flex flex-row w-full h-[34px] rounded-lg overflow-hidden">
      
        <input
          type="text"
          className="h-full w-[90%] bg-slate-500 text-slate-200 pl-2"
          id="add-todo"
          placeholder="Write Todo..."
          value = {task}
          onChange = {(event) => setTask(event.target.value)}
        />
        <button
          
          className="text-white bg-green-500 w-[10%] cursor-pointer click:bg-green-700"
        >
          Add
        </button>
      </form>
    
  );
}

export default Input;

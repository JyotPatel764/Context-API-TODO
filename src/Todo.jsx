import React from "react";
import {useContext , useState} from 'react';
import TodoContext from "../context/TodoContext";

function Todo({singleTodo , identifier , method}) {
  const [readOnly , setReadOnly] = useState(true);
  const {list , setList} = useContext(TodoContext);
  
  //Toggle the todo checkbox
  function completed() {
    const updatedList = list.map((obj , index) => {
      if (index == identifier) {
        return {
          ...obj,
          checked: !obj.checked 
        }
      }
      else {
        return obj;
      }
    })
    setList(updatedList);
    method(prevValue => !prevValue);
  }

  //Delete a todo
  function deleteTask() {
    const updatedList = list.filter((obj , index) => {
      if (index !== identifier) {
        return obj;
      }
    });
    setList(updatedList);
    method(prevValue => !prevValue);
  }

  //EdiTodo
  function openEditMode() {
    setReadOnly(prevValue => !prevValue);
  }

  //Update todo
  function updateTodo(event) {
    const updatedList = list.map((todo , index) => {
      if (index === identifier) {
        return {
          ...todo,
          todo: event.target.value
        }
      }
      else {
        return todo;
      }
    });
    setList(updatedList);
    method(prevValue => !prevValue);
    setReadOnly(prevValue => !prevValue);
  }

  const style = {
    backgroundColor: "green",
    textDecoration:"line-through"
  }

  return (
    <div className="flex flex-row items-center justify-between bg-purple-200 w-full h-12 rounded-lg p-2" style = {singleTodo.checked ? style : null}>
      <div className="flex flex-row gap-2 items-center">
        <input onChange = {completed} type="checkbox" id="done" checked = {singleTodo.checked}/>
        {readOnly ?  <label htmlFor="done font-semibold" className = {singleTodo.checked ? "line-through" : ""}>{singleTodo.todo}</label> : 
        <input type = "text" className = "w-[140px] shadow-md rounded-lg" defaultValue = {singleTodo.todo} onKeyDown = {(event) => {
          if (event.key === "Enter") {
            updateTodo(event);
          }
        }}/>}
       
      </div>

      <div className = 'flex flex-row gap-[10px] h-full w-auto'>
        <button onClick = {openEditMode} className = 'h-full w-[30px] rounded-lg bg-white pl-[6px]'>
            <img src = '/images/pencil.png' height = "20px" width = "20px"/>
        </button>
        <button onClick = {deleteTask} className = 'h-full w-[30px] rounded-lg bg-white pl-[6px]' >
            <img src = '/images/close.png' height = "20px" width = "20px"/>
        </button>
      </div>
    </div>
  );
}

export default Todo;

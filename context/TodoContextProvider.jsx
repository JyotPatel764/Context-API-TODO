import React from "react";
import { useContext , useState } from "react";
import TodoContext from "./TodoContext";

function TodoContextProvider({ children }) {
  const [list , setList] = useState([]);
  return <TodoContext.Provider value={{list , setList}}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;

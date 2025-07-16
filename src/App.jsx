import { useState , useContext , useEffect } from 'react'
import Input from './Input';
import Todo from './Todo';
import TodoContext from '../context/TodoContext';

function App() {
  const [propogate , setPropogate] = useState(false);
  const {list} = useContext(TodoContext);
  const [dummyList , setDummyList] = useState(JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : []);

  useEffect(() => {setDummyList(list)} , [propogate]);

  useEffect(() => {
    console.log(dummyList);
    localStorage.setItem("todos" , JSON.stringify(dummyList));
    const data = JSON.parse(localStorage.getItem("todos"));
    console.log(data);
  } , [propogate])

  return (
    
    <div className = 'h-[100vh] bg-slate-700 gap-8 flex flex-col items-center pt-22'>
      <h1 className = 'text-white font-bold text-2xl '>Manage your todos</h1>
      <div className = 'flex flex-col gap-4 h-auto w-[580px]'>
        <Input method = {setPropogate}/>
        {dummyList.map((todo , index) => {
          return (
            <Todo key = {index} identifier = {index} singleTodo = {todo} method = {setPropogate}/>
          )
        })}
      </div>
    </div>
    
  )
}

export default App

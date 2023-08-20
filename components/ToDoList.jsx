'use client'
import {useState, useEffect} from 'react'
import ToDoForm from "./ToDoForm";
import Image from 'next/image';

const ToDoList = () => {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const ToggleCheck = (id, completed) => {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !completed,
          
          }
        }
        else {
          return todo
        }
      })
    })
  }
  const AddItem = (input) => {
    setTodos(currentTodo => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          text: input,
          completed: false
        }
      ]
    })
  }
  const DeleteItem = (id) => {
   setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id)
   })
  }

  
  return (
    <>
    <ToDoForm AddItem={AddItem}/>
    <div className="bg-white rounded-md h-[400px] overflow-y-scroll">
    {todos.length === 0 && "No Todos Yet "}
    {todos.map(todo => {
         return (
           <div key={todo.id} className="flex p-3 justify-between ">
             <label className='relative'>
              <input type="checkbox" onChange={e => ToggleCheck(todo.id, todo.completed)}  className="appearance-none w-[20px] h-[20px] rounded-full border checked:bg-gradient-to-r checked:from-violet-500 checked:to-fuchsia-500 mr-[10px]" />
              {todo.completed && <Image src='/icon-check.svg' width={15} height={15} className='absolute z-10 top-1 left-[2px]'/>}
             </label>
             <p className={`w-[90%] ${todo.completed ? 'line-through text-gray-400' : ''} `}>{todo.text}</p>
             <button onClick={() => DeleteItem(todo.id)}><Image src='/icon-cross.svg'  width={30} height={30} alt='delete'/></button>
           </div>
         )
       }
      )}
    </div>
    </>
  )
}

export default ToDoList
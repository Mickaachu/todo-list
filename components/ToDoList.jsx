'use client'
import {useState, useEffect} from 'react'
import ToDoForm from "./ToDoForm";
import Image from 'next/image';

const ToDoList = ({dark}) => {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos')
    return localData ? JSON.parse(localData) : []
  })
  const [show, setShow] = useState('All');

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
  const ClearCompleted = () => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => !todo.completed)
    })
  }
  
  return (
    <>
    <ToDoForm AddItem={AddItem} dark={dark}/>
    <div className='flex flex-col gap-6'>
      <div className={`${dark ? 'bg-slate-900 text-slate-200' : 'bg-white'} rounded p-3 h-[400px] flex flex-col justify-between `}>
        <div className='overflow-y-auto h-full task-scrolling'>
          {todos.length === 0 && "No Todos Yet "}
          {show === 'All' ? todos.map(todo => {
              return (
                <div key={todo.id} className="flex p-5 justify-between border-b border-gray-200 ">
                  <label className='relative'>
                    {!todo.completed && <input type="checkbox" onChange={e => ToggleCheck(todo.id, todo.completed)}  className="appearance-none w-[20px] h-[20px] rounded-full border checked:bg-gradient-to-r checked:from-violet-500 checked:to-fuchsia-500 mr-[10px]" />}
                    {todo.completed &&<input type="checkbox" checked onChange={e => ToggleCheck(todo.id, todo.completed)}  className="appearance-none w-[20px] h-[20px] rounded-full border checked:bg-gradient-to-r checked:from-violet-500 checked:to-fuchsia-500 mr-[10px]" />}
                    {todo.completed && <Image src='/icon-check.svg' width={15} height={15} className='absolute z-10 top-1 left-[2px]'/>}
                  </label>
                  <p className={`w-[90%] ${todo.completed ? 'line-through text-gray-400' : ''} `}>{todo.text}</p>
                  <button onClick={() => DeleteItem(todo.id)}><Image src='/icon-cross.svg'  width={16} height={16} alt='delete' className='fill-red-500'/></button>
                </div>
              )
            }
            ) :
          show === 'Active' ? todos.filter(todo => !todo.completed).map(todo => {
              return (
                <div key={todo.id} className="flex p-5 justify-between border-b border-gray-200 ">
                  <label className='relative'>
                    <input type="checkbox" onChange={e => ToggleCheck(todo.id, todo.completed)}  className="appearance-none w-[20px] h-[20px] rounded-full border checked:bg-gradient-to-r checked:from-violet-500 checked:to-fuchsia-500 mr-[10px]" />
                   
                  </label>
                  <p className={`w-[90%] ${todo.completed ? 'line-through text-gray-200' : ''} `}>{todo.text}</p>
                  <button onClick={() => DeleteItem(todo.id)}><Image src='/icon-cross.svg'  width={16} height={16} alt='delete'/></button>
                </div>
              )
            }
            ):
          todos.filter(todo => todo.completed).map(todo => {
              return (
                <div key={todo.id} className="flex p-5 justify-between border-b border-gray-400 ">
                  <label className='relative'>
                    <input type="checkbox" checked  onChange={e => ToggleCheck(todo.id, todo.completed)}  className="appearance-none w-[20px] h-[20px] rounded-full border checked:bg-gradient-to-r checked:from-violet-500 checked:to-fuchsia-500 mr-[10px]" />
                    {todo.completed && <Image src='/icon-check.svg' width={15} height={15} className='absolute z-10 top-1 left-[2px]'/>}
                  </label>
                  <p className={`w-[90%] ${todo.completed ? 'line-through text-gray-400' : ''} `}>{todo.text}</p>
                  <button onClick={() => DeleteItem(todo.id)}><Image src='/icon-cross.svg'  width={16} height={16} alt='delete'/></button>
                </div>
              )
            }
            )
          }
        </div>
        <div className='flex justify-between border-t border-gray-200  text-gray-500'>
          <p className='text-sm'>{todos.length} items left</p>
          <div className=' hidden md:flex gap-4 '>
            <button className='text-sm hover:text-blue-400' onClick={() => setShow('All')}>All</button>
            <button className='text-sm hover:text-blue-400' onClick={() => setShow('Active')}>Active</button>
            <button className='text-sm hover:text-blue-400' onClick={() => setShow('Completed')}>Completed</button>
          </div>
            <button className='text-sm hover:text-blue-400' onClick={() => ClearCompleted()}>Clear Completed</button>
          </div>
        </div>
      
      <div className={`${dark ? 'bg-slate-900 text-slate-200' : 'bg-white'}  p-3 rounded h-[60px]  md:hidden flex justify-center items-center gap-4`}>
        <button className='block md:hidden' onClick={() => setShow('All')}>All</button>
        <button className='block md:hidden' onClick={() => setShow('Active')}>Active</button>
        <button className='block md:hidden' onClick={() => setShow('Completed')}>Completed</button>
      </div>
    </div>
    
    </>
  )
}

export default ToDoList
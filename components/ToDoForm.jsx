'use client'
import {useState} from 'react'
const ToDoForm = ({AddItem, dark}) => {
  const [input, setInput] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(input === '') {
      return
    }
    else {
      AddItem(input)
    }
    e.target.reset()
    setInput('')

  }
 

  return (
    <>
    <form className={`flex p-3 ${dark ? 'bg-slate-900 text-slate-200' : 'bg-white'} gap-3 rounded-md`} onSubmit={handleSubmit} >
        <div className='w-[20px] h-[20px] rounded-full border'></div>
        <input placeholder='Create a new todo...' className={dark ? 'bg-slate-900 text-slate-200 w-full' : 'bg-white w-full'} onChange={e => setInput(e.target.value)}  />
    </form>
    
    </>
  )
}

export default ToDoForm
'use client'
import {useState} from 'react'
const ToDoForm = ({AddItem}) => {
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
    <form className="flex p-3 bg-white gap-3 rounded-md" onSubmit={handleSubmit} >
        <div className='w-[20px] h-[20px] rounded-full border'></div>
        <input placeholder='Create a new todo' onChange={e => setInput(e.target.value)} className='w-full' />
    </form>
    
    </>
  )
}

export default ToDoForm
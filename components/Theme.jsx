'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import ToDoList from './ToDoList'

const Theme = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        if(dark){
            document.body.classList.add('bg-slate-950')
            document.body.classList.remove('bg-gray-200')
        }else{
            document.body.classList.add('bg-gray-200')
            document.body.classList.remove('bg-slate-950')
        }
    },[dark])

    
  return (
    <main className="relative h-full ">
        <div className='relative w-screen h-[30vh]'>
            { dark ? <Image src='/bg-desktop-dark.jpg' alt='backdrop-dark' fill/> : <Image src='/bg-desktop-light.jpg' alt='backdrop-light' fill/>}

        </div>
        <div 
        className='absolute top-3 left-0
        right-0 py-6 px-6 z-10 gap-6 flex 
        flex-col justify-center items-center  ' >
            <div className='flex justify-between gap-2  max-w-[600px] w-full'>
                <h1 className='text-white font-bold text-[36px] tracking-widest'>TODO</h1>
                <button onClick={() => setDark(!dark)}>
                    {dark ? <Image src='/icon-sun.svg' width={30} height={30} />: <Image src='/icon-moon.svg' width={30} height={30}/>}
                </button>
            </div>
            <div className='flex flex-col gap-2  max-w-[600px] w-full  '>
                <ToDoList/>
            </div>
        </div>
    </main>
  )
}

export default Theme
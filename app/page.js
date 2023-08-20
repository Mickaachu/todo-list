import ToDoList from "@/components/ToDoList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div className='relative w-screen h-[30vh]'>
        <Image src='/bg-mobile-light.jpg' fill/>
        <Image src='/bg-desktop-light.jpg' fill className='hidden md:block'/>
      </div>
      <div 
        className='absolute top-3 left-0
        right-0 py-6 px-6 z-10 gap-6 flex flex-col justify-center items-center  ' >
        <div className='flex justify-between gap-2  max-w-[600px] w-full'>
          <h1 className='text-white font-bold text-[36px] tracking-widest'>TODO</h1>
          <button><Image src='/icon-moon.svg' width={30} height={30}/></button>
        </div>
        <div className='flex flex-col gap-2  max-w-[600px] w-full '>
          <ToDoList/>
        </div>
      </div>
    </main>
  )
}

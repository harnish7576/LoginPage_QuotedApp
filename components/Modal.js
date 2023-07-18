import { useAuth } from '@/context/AuthContext'
import React, {useState,useEffect} from 'react'
import ReactDom from 'react-dom'

export default function Modal(props) {
    const { setOpenModal } = props
    

    const [_document, set_document] = useState(null)
    const {logout} = useAuth()

    useEffect(()=>{
        set_document(document)
    }, [])

    if(!_document){return null}

    // ReactDom.createPortal

  return (
    <div className='w-screen h-screen top-0 left-0 bg-white text-slate-900 flex flex-col'>
        <div className='flex text-white bg-slate-900 text-6xl sm:text-7xl items-center justify-between p-1.5'>
            <h1>Profile</h1>
            <i onClick={()=>setOpenModal(false)} class="fa-solid fa-circle-xmark 
            text-white text-right text-3xl sm:text-4xl p-2.5 sm:p-6 cursor-pointer
            duration-300 hover:scale-110 hover:rotate-90"></i>
        </div>
        <div className='gap-3 flex flex-col'>
            <div className='text-left text-xl sm:text-2xl p-10'>
                <input
                    type='file'
                    accept='image/*'
                    className='outline-none pb-10'
                /> 
                <h2 className='bg-transparent border-b-2 border-blue-950 
                border-yellow-300 focus:border-blue-900 outline-none text-slate-900 
                p-2 w-full max-w-[15ch] text-right pl-4 mb-4 text-2xl sm:text-3xl 
                placeholder:text-blue-950 placeholder:opacity-50'>User</h2>
            </div>
            <button 
                onClick={()=>{
                    logout()
                    setOpenModal(false)}} 
                className='p-1 border border-yellow-300 border-solid 
                    outline-none text-slate-900 p-2 w-full max-w-[10ch] 
                    text-right pr-4 mb-4 text-4xl sm:text-5xl sm:max-w-[30ch] 
                    duration-300 relative after:absolute after:top-0 
                    after:right-full after:bg-yellow-300 after:z-10 after:w-full 
                    after:h-full overflow-hidden hover:after:translate-x-full 
                    after:duration-300 hover:text-blue-950 '>
                <h2 className='relative z-20'>LOGOUT</h2>
            </button>
        </div>
    </div>
    // ,
    // _document.getElementById('portal')
  )
}

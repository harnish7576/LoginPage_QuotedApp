import React, {useEffect, useState} from 'react'
import Modal from './Modal'
import ReactDom from 'react-dom'


export default function Header() {
    const [openModal, setOpenModal] = useState(false)
    
    
    return (
    <>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        <div className='sticky items-center flex justify-between top-0 w-full 
        bg-inherit left-0 text-white p-1.5'>
            <h1>Quoted</h1>
            <i onClick={()=>setOpenModal(true)} className="fa-solid fa-house-user 
            text-white text-right text-3xl sm:text-4xl p-2.5 sm:p-6 cursor-pointer
            duration-300 hover:scale-110"></i>
            
        </div>
    </>
  )
}

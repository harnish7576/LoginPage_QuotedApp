import { useAuth } from '@/context/AuthContext'
import React, {useState} from 'react'
import Modal from './Modal'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true) 
    const {login, signup, currentUser} = useAuth()

    console.log(currentUser)

    async function submitHandler(){
        // error handling - empty credentials 
        if (!email || !password) {
            setError('Please enter Email and Password')
            return
        }
        // only for already signed up user
        if (isLoggingIn) {
            try {
              await login(email, password);
            } catch (error) {
              if (error.message.includes('auth/invalid-email')) {
                setError('Invalid Email');
              } else {
                setError('Incorrect Email or Password');
              }
            }
          } else {
            await signup(email, password);
          }
        
        
    }

    

  return (
    <div>
        <h2 className='mb-8 text-left p-1'>{ isLoggingIn ? 'LOGIN' : 'REGISTER' }</h2>   
        <div className='flex flex-col gap-4 sm:gap-6'>
            {error && <div className='w-full text-right text-xl max-w-[40ch] border border-solid border-red-800 text-red-800 px-2 py-2 sm:max-w-[96ch]'>{error}</div>}
            <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
                type='text'
                placeholder='Email'
                className='bg-transparent border-b-2 border-blue-950 border-yellow-300 focus:border-blue-900 outline-none text-slate-900 p-2 w-full max-w-[40ch] text-right pl-4 mb-4 text-4xl sm:text-5xl placeholder:text-blue-950 placeholder-opacity-50'
            />
            <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type='password'
                placeholder='Password'
                className='bg-transparent border-b-2 border-blue-950 border-blue-900 border-yellow-300 focus:border-blue-900 outline-none text-slate-900 p-2 w-full max-w-[40ch] text-right pl-4 mb-4 text-4xl sm:text-5xl placeholder:text-blue-950 placeholder-opacity-50'
            />
            <div className='flex'>
                <button onClick={submitHandler} className="p-1 border border-blue-950 border-solid 
                    outline-none text-slate-900 p-2 w-full max-w-[10ch] 
                    text-right pr-4 mb-4 text-4xl sm:text-5xl sm:max-w-[30ch] 
                    duration-300 relative after:absolute after:top-0 
                    after:right-full after:bg-blue-950 after:z-10 after:w-full 
                    after:h-full overflow-hidden hover:after:translate-x-full 
                    after:duration-300 hover:text-white ">
                    <h2 className='relative z-20'>SUBMIT</h2>
                </button>
                <h2 onClick={()=> setIsLoggingIn(!isLoggingIn)} className='duration-300 hover:scale-110 underline text-xl sm:text-2xl text-right pl-5 py-3 cursor-pointer'>{ !isLoggingIn ? 'LOGIN' : 'REGISTER' }</h2>
            </div>
        </div>
        <div className="fixed bottom-0 right-0 text-right text-blue opacity-50 p-4 md:p-8 text-5xl sm:text-6xl">
            <div className="whitespace-normal">
                For many of us, inspiration is triggered by the quips and quotations of others.
            </div>
        </div>

        
    </div>
    

  )
}

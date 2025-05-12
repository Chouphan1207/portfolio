'use client'

import React, { useState } from 'react'
import { Modal } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { openSignInModal, closeSignInModal } from '@/redux/slices/modalSlice'
import { FaEyeSlash, FaXmark } from 'react-icons/fa6'
import { FaEye } from 'react-icons/fa'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'


export default function SignInModal() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isOpen = useSelector((state: RootState) => state.modals.signInModalOpen);
    const dispatch: AppDispatch = useDispatch()

    async function handleLogin() {
        await signInWithEmailAndPassword(auth, email, password)
      }
    
    async function handleGuestLogIn() {
        await signInWithEmailAndPassword(auth, 'Guest@gmail.com', '12345678')
    }

    console.log(isOpen)
    return (
    <>
        <button
        className="w-full h-[48px] md:w-[80px] md:h-[40px] bg-[var(--background)]/90 text-[var(--foreground)] rounded-3xl font-bold transition-transform duration-300 ease-in-out hover:bg-opacity-80 hover:scale-105 outline-none"
        onClick={() => dispatch(openSignInModal())}
        >
        Login
        </button>

    <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignInModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='flex items-center justify-center'
    >
        <div className='mt-40 sm:mt-0 w-full h-full sm:w-[600px] sm:h-fit bg-[var(--background)] shadow-xl sm:rounded-xl'>
            <FaXmark className='w-7 mt-5 ms-5 sm:px-20'
            onClick={() => dispatch(closeSignInModal())}/>
            <div className='pt-10 pb-20 px-4 sm:px-20'>
            <h1 className='text-3xl font-bold mb-10'>Login to your account</h1>
            <div className='w-full space-y-5 mb-10'>
                <input 
                type="email" 
                className='w-full h-[54px] border border-gray-200 outline-none pl-3 rounded-[4px]  transition focus:border-[var(--foreground)]'
                placeholder='Email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
                <div className='w-full h-[54px] border border-gray-200 outline-none rounded-[4px]  transition focus-within:border-[var(--foreground)] flex items-center overflow-hidden pr-3'>
                    <input 
                    className='w-full h-full ps-3 outline-none'
                    type={showPassword ? 'text' : 'password'} 
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    />
                    <div
                    onClick={() => setShowPassword(!showPassword)} 
                    className='w-5 h-5 tdext-gray-400 cursor-pointer'>
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </div>
                </div>   
            </div> 
            <button
                className='bg-[var(--foreground)] text-[var(--background)] w-full h-[48px] rounded-full font-bold hover:bg-opacity-25 transition'
                onClick={() => handleLogin()}>
                Login
            </button>
            <span className='my-3 text-sm text-center block'>Or</span>
            <button
                className='bg-[var(--foreground)] text-[var(--background)] w-full h-[48px] rounded-full font-bold hover:bg-opacity-25 transition' 
                onClick={() => handleGuestLogIn()}>
                Log In as Guest
            </button>
            </div>   
        </div>
    </Modal>   
    </>
  )
}

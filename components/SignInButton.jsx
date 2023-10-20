'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const SignInButton = () => {
  return (
    <button onClick={()=>signIn('google')} className='bg-blue-500 text-white px-4 py-3 rounded-md'>
        Sign in with Google
    </button>
  )
}

export default SignInButton

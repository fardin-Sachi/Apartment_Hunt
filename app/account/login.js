"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import Button from '../components/common/button';

export default function Login() {
    const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='flex justify-center mt-[19%] mb-6'>
        <div className='w-auto bg-white bg-opacity-20 rounded border border-neutral-400 py-[37px] px-[54px]'>
            <h1 className='text-2xl font-bold font-poppins'>Login</h1>
            <input
                type="text"
                placeholder='Username or Email'
                className='text-black font-medium font-poppins pb-[8px] pt-4 h-auto w-full border-b-2 mb-[10.94%]'
            />
            <input
            type="text"
            placeholder='Password'
            className='text-black font-medium font-poppins pb-[8px] pt-4 h-auto w-full border-b-2 mb-[5.21%]'
            />
                {/* Remember Me/ Forget Password */}
            <div className='flex justify-between pb-12'>
                <div className='flex gap-x-[9px]'>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className=''
                    />
                    <p className='font-medium font-poppins'>Remember Me</p>
                </div>
                <Link href="/">
                    <p>Forget Password</p>
                </Link>
            </div>
            <Button title={"Login"} classes={"w-full px-[210px] py-[14px] text-center bg-[#275A53] text-white"}/>

            <div className='flex justify-center'>
                <p className='font-medium font-poppins text-center pt-4'>
                Don’t have an account? &nbsp;
                </p>
                <p className='font-medium font-poppins text-center pt-4 underline'>Create an account</p>
            </div>

        </div>
    </div>
  )
}

"use client"

import Image from "next/image";
import Link from "next/link"
import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';


export default function login() {
    const router = useRouter();

    const [inputusername, setInputUsername] = useState('');
    const usernameregister = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputUsername(event.target.value);
    };

    const [inputpassword, setInputPassword] = useState('');
    const passwordregister = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(event.target.value);
    };


    const Calllogin = async () => {
        try {
            const response = await axios.post("https://6b04-2403-6200-8821-1051-8c6e-1c20-5f81-1fe1.ngrok-free.app/login/",
                {
                    username: inputusername,
                    password: inputpassword
                })
            if (response.status === 200) {
                router.push("/")
            }
        } catch (error) {   
            console.log("Callregister Error:", error)
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 flex-col space-y-3">
                <div className="space-y-0">
                    <h1 className="text-center text-6xl font-bold mb-4 text-white">WELCOME</h1>
                    <h1 className="text-center text-xl mb-4 text-white">surawiwat school</h1>
                </div>
                <div className="w-[300px] bg-white p-4 rounded-md">
                    <h1 className="text-center text-2xl font-bold mb-4">SIGN IN</h1>
                    <div className="mb-4">
                        <div className="flex justify-center ...">
                            <Image className='hover>:scale-90' src="/chill.png " width={130} height={130} alt="" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" placeholder="Username" id="username" onChange={usernameregister}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="Password" id="password" onChange={passwordregister}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="flex-col flex justify-center space-y-3 col">
                        <button onClick={Calllogin} type="submit" className="bg-gray-200 hover:text-white hover:bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-black font-medium py-2 px-4 rounded">SIGN IN</button>
                        <Link href="register" className="flex justify-center hover:text-black text-gray-700 font-medium py-2 px-4 rounded">doesnt have an account?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
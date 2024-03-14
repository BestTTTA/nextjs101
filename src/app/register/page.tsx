"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();

    const [color, setColor] = useState('bg-red-500');
    const [position, setPosition] = useState('translate-x-0');

    useEffect(() => {
        const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-pink-500'];
        const positions = ['translate-x-0', 'translate-x-20', 'translate-y-20', 'translate-x-[-20px]', 'translate-y-[-20px]'];

        const changeColorAndPosition = () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomPosition = positions[Math.floor(Math.random() * positions.length)];
            setColor(randomColor);
            setPosition(randomPosition);
        };

        const intervalId = setInterval(changeColorAndPosition, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const [inputusername, setInputUsername] = useState('');
    const usernameregister = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputUsername(event.target.value);
    };

    const [inputpassword, setInputPassword] = useState('');
    const passwordregister = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(event.target.value);
    };


    const Callregister = async () => {
        try {
            const response = await axios.post("https://6b04-2403-6200-8821-1051-8c6e-1c20-5f81-1fe1.ngrok-free.app/register/",
                {
                    username: inputusername,
                    password: inputpassword
                })
            if (response.status === 200) {
                router.push("/login")
            }
        } catch (error) {   
            console.log("Callregister Error:", error)
        }
    }


    return (
        <div className={`h-14 ${color} transition ease-in-out duration-1000 flex items-center justify-center min-h-screen bg-gray-100`}>
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-center">Register</h3>
                <p>Useranme: {inputusername}</p>
                <p>Password: {inputpassword}</p>
                <form>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Username</label>
                            <input type="email" placeholder="Username" onChange={usernameregister}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                id="email" />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" onChange={passwordregister}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div className="flex items-baseline justify-center ">
                            <button onClick={Callregister} className={`h-14 ${color} transition ease-in-out duration-1000 bg-gray-100 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg `}>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

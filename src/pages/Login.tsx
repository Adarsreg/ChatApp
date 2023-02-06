import React from 'react'

export function Login() {


    return (

        <div className="flex flex-col items-center h-screen bg-gray-100 p-6 font-mono">
            <div className="w-full max-w-sm">
                <h1 className="text-4xl text-blue-700 font-bold mb-6 font-sans display ">CHAT ON</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="password" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500">Don't have an existing account? <a className="text-blue-600 hover:underline" href="#">Register</a></p>
            </div>
        </div>


    )
}
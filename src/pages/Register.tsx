import React from 'react'

export function Register() {


    return (
        <div className='formcontainer'>

            <div className='formwrapper'>
                <p className="text-sky-400">Chat on</p>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder='password' />
                    <input type="file" />
                    <button className="bg-violet-500 hover:bg-violet-600
                    active:bg-violet-700
                    focus:outline-none focus:ring focus:ring-violet-300">
                        Sign up</button>
                </form>
                <p>Have and existing account? Login</p>
            </div>
        </div>
    )
}

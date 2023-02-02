import React from 'react'

export function Register() {


    return (
        <div className='formcontainer'>
            <div className='formwrapper'>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder='password' />
                    <input type="file" />
                </form>
            </div>
        </div>
    )
}

import React from 'react'
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';
import { Register } from './Register';

const Home = () => {
    return (
        <div className='home' >
            <div className='container bg-indigo-300 h-screen flex  justify-center items-center' style={{ display: 'flex', flexDirection: 'column' }}>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home;
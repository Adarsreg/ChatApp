import React, { useState } from 'react'
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';
import { Register } from './Register';

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='home bg-indigo-300 h-screen flex-row flex items-center justify-center' >

            <Sidebar />
            <Chat />
        </div>

    );
}

export default Home;

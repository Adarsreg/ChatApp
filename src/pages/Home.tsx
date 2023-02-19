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
        <div className='home bg-[#4f595e]'>
            <Sidebar />
            <Chat />
        </div>

    );
}

export default Home;

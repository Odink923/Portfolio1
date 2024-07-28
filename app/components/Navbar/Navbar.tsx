'use client'; // Додайте це на початку файлу

import React, { useState } from 'react';
import NavbarButton from '@/app/components/Buttons/NavbarButton/NavbarButton';
import NavbarSoonButton from '@/app/components/Buttons/NavbarButton/NavbarSoonButton';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className=" top-0 left-0 w-full z-30 bg-transparent p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/logoCreon.svg" alt="Creon Logo" className="h-8 md:h-10 lg:h-12" />
                    <img src="/textLogo.svg" alt="Creon" className="ml-2 h-6 md:h-8 lg:h-10" />
                </div>
                <div className="hidden md:flex items-center space-x-10">
                    <NavbarButton>Creon Pass</NavbarButton>
                    <NavbarSoonButton>Token</NavbarSoonButton>
                    <NavbarSoonButton>AI Revenue</NavbarSoonButton>
                    <NavbarSoonButton>AI Launchpad</NavbarSoonButton>
                </div>
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                <button className="hidden md:block bg-transparent hover:bg-blue-500 text-white py-2 px-8 border border-white hover:border-transparent rounded ml-4">
                    Connect
                </button>
            </div>
            <div className={`fixed top-0 right-0 w-64 bg-black h-full z-40 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
                <div className="flex flex-col p-4">
                    <div className="flex items-center justify-between mb-6">
                    <button className=" bg-transparent hover:bg-blue-500 text-white py-2 px-8 border border-white hover:border-transparent rounded">
                        Connect
                    </button>
                        <button onClick={toggleSidebar} className="focus:outline-none text-white">
                            <FaTimes size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <NavbarButton>Creon Pass</NavbarButton>
                        <NavbarSoonButton>Token</NavbarSoonButton>
                        <NavbarSoonButton>AI Revenue</NavbarSoonButton>
                        <NavbarSoonButton>AI Launchpad</NavbarSoonButton>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;

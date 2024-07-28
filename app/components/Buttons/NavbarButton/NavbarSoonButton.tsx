import React from 'react';

interface Children {
    children: React.ReactNode;
}

const NavbarSoonButton: React.FC<Children> = ({children}) => {
    return (
        <div className="flex items-center space-x-2 font-satoshiBold">
            <span className="text-base md:text-lg lg:text-xl text-white">{children}</span>
            <span className="text-xs md:text-sm lg:text-base text-purple-600 bg-black rounded-full px-2 py-1">
                SOON
            </span>
        </div>
    );
};

export default NavbarSoonButton;

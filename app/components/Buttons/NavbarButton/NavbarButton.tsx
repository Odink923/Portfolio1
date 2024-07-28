import React from 'react';

interface Children {
    children: React.ReactNode;
}

const NavbarButton: React.FC<Children> = ({children}) => {
    return (
        <span className="text-base md:text-lg lg:text-xl h-6 md:h-8 lg:h-10 font-satoshiBold text-white hover:text-blue-500 transition-colors duration-200 ease-in-out cursor-pointer">
            {children}
        </span>
    );
};

export default NavbarButton;

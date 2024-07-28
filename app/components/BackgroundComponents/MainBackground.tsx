import React from 'react';

interface Children {
    children: React.ReactNode;
}

const MainBackground: React.FC<Children> = ({ children }) => {
    return (
        <div className="relative top-0 left-0 w-full h-full z-0 overflow-hidden">
            <video
                muted
                loop
                autoPlay
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/main-background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default MainBackground;

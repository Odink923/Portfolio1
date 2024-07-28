import React from 'react';

interface Children {
    children: React.ReactNode;
   
}

const FooterBackground: React.FC<Children> = ({children}) => {
    return (
        <div className="relative w-full h-full">
            <div className="absolute top-0 pb-20 left-0 w-full h-1/10 bg-gradient-to-b from-black to-transparent z-20"></div>
            <video
                muted
                loop
                autoPlay
                className="absolute top-0 left-0 w-full h-full -z-50 object-cover"
            >
                <source src='/videos/roadmap-video.mp4' type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default FooterBackground;

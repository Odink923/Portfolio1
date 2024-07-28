import React from 'react';

const CreonPassSection = () => {
    return (
        <div className="px-4 md:px-16 lg:px-60 relative bg-black">
            <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black to-transparent z-20"></div>
            <div className="flex flex-col lg:flex-row">
                <div className="pt-20 pb-20 lg:pt-40 lg:pb-40">
                    <div className="text-4xl text-white md:text-5xl lg:text-7xl font-momentExtended flex flex-col">
                        <span >CREON PASS</span>
                        <span>NFT</span>
                    </div>
                    <hr className="border-grey-custom mt-5 mb-5" />
                    <div className="flex flex-col">
                        <span className="text-lg  md:text-xl lg:text-22 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-custom to-purple-custom">
                            The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools
                        </span>
                    </div>
                    <div className="font-satoshiRegular text-white text-base md:text-lg lg:text-18 mt-10">
                        <div className="border-2 border-grey-custom rounded-md p-4 mb-4">
                            Pre-launch investment opportunities for upcoming AI projects
                        </div>
                        <div className="border-2 border-grey-custom rounded-md p-4 mb-4">
                            Free and early access to Creon built AI projects
                        </div>
                        <div className="border-2 border-grey-custom rounded-md p-4 mb-4">
                            Higher allocation limits on the Creon AI Launchpad
                        </div>
                        <div className="border-2 border-grey-custom rounded-md p-4 mb-4">
                            Revenue share distribution from Creon built AI projects
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-18">
                        <button className="bg-gradient-to-r from-blue-custom to-purple-custom hover:from-blue-custom hover:to-blue-custom text-white font-semibold py-4 px-8 md:px-20 lg:px-40 rounded font-satoshiBold">
                            Buy Creon Pass
                        </button>
                    </div>
                </div>
                <div className="relative mt-10 lg:mt-40 lg:ml-10">
                    <video className="w-full lg:w-auto lg:max-w-md" muted loop autoPlay>
                        <source src='/videos/nft-video.mp4' type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20"></div>
                </div>
            </div>
        </div>
    );
};

export default CreonPassSection;

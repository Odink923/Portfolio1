import React from 'react';

const ProfitingSection = () => {
    return (
        <div className="px-4 md:px-16 bg-black lg:px-60 pt-10 pb-20">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="lg:w-1/2">
                    <span className="text-4xl md:text-5xl lg:text-7xl text-white font-momentExtended block">
                        Profiting Through
                    </span>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-momentExtended bg-clip-text text-transparent bg-gradient-to-r from-blue-custom to-purple-custom block lg:inline pt-5">
                        AI Innovation & Decentralization
                    </span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 lg:justify-between lg:items-start">
                <div className="relative mb-10 lg:mb-0 lg:mr-10 lg:w-1/2">
                    <video className="w-full h-auto relative z-10" muted loop autoPlay>
                        <source src='/videos/creon-logo.mp4' type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="pt-10 lg:pt-0 text-white lg:w-1/2 lg:pl-10">
                    <span className="text-lg md:text-xl lg:text-22 font-satoshiBold block">
                        The dynamic community driven business model of the future.
                    </span>
                    <span className="text-base md:text-lg lg:text-18 pt-4 font-satoshiRegular block">
                        At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfitingSection;

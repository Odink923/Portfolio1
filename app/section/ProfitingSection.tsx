import React from 'react';

const ProfitingSection = () => {
    return (
        <div className="px-4 md:px-16 bg-black lg:px-60 pt-10 pb-20">
            <div className="flex flex-col">
                <span className="text-4xl md:text-5xl lg:text-7xl text-white font-momentExtended">Profiting Through</span>
                <div className="flex justify-end">
                    <span
                        className="text-2xl md:text-3xl lg:text-4xl font-momentExtended bg-clip-text text-transparent bg-gradient-to-r from-blue-custom to-purple-custom pt-5">
                        AI Innovation & Decentralization
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row mt-10 lg:mt-40">
                    <div className="relative mb-10 lg:mb-0 lg:mr-10 lg:w-1/2">
                        <video className="w-full h-auto relative z-10" muted loop autoPlay>
                            <source src='/videos/creon-logo.mp4' type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="pt-10 lg:pt-20 text-white lg:mt-40 lg:pl-7 lg:pr-7 flex flex-col border-l-0 lg:border-l-2 border-r-0 lg:border-r-2 border-grey-custom">
                        <span className="text-lg md:text-xl lg:text-22 font-satoshiBold">
                            The dynamic community driven business model of the future.
                        </span>
                        <span className="text-base md:text-lg lg:text-18 pt-4 font-satoshiRegular">
                            At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfitingSection;

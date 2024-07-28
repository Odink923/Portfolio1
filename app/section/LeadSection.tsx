import React from 'react';
import Navbar from "@/app/components/Navbar/Navbar";

const LeadSection = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-4 md:mx-16 lg:mx-60">
                <div className="mt-24 lg:mt-60">
                    <div className="uppercase flex flex-col text-white text-3xl md:text-5xl lg:text-7xl font-momentExtended pb-10">
                        <span>The world&apos;s first</span>
                        <span>platform for Tokenizing</span>
                        <span>AI blockchain projects</span>
                    </div>

                    <span className="relative inline-block pt-3 pb-3">
                        <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-custom to-purple-custom"></span>
                        <span className="text-lg md:text-xl lg:text-22 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-custom to-purple-custom">
                            Hold the Creon Pass NFT and earn passive income from AI Tools
                        </span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-custom to-purple-custom"></span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LeadSection;

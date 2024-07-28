import React from 'react';
import OurVisionButton from "@/app/components/Buttons/OurVisionButton/OurVisionButton";

const OurVisionSection = () => {
    return (
        <div className="px-4 md:px-16 bg-black lg:px-60 py-10">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col items-center lg:items-start">
                  
                    <div className="pt-8 lg:pl-28">
                        <img src="/ourvision.png" alt="Our Vision" className="max-w-full h-auto"/>
                    </div>
                </div>

                <div className="flex flex-col mt-10 lg:mt-0 lg:ml-10">
                    
                    <hr className="ml-0 lg:ml-40 border-grey-custom mt-8 mb-8"/>
                    <div className="flex flex-col pl-0 lg:pl-40">
                        <div className="flex items-center">
                            <img src="/buttonOurvision2.svg" alt="none" style={{userSelect: "none"}}/>
                            <div className="font-satoshiBold text-white flex flex-col pl-7 text-lg md:text-xl lg:text-22">
                                <span>Transparent & Fair Decentralized</span>
                                <span>Earnings</span>
                            </div>
                            <div className="pl-4 lg:pl-10 pt-2  lg:pt-7">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8 11L14 5" stroke="white" strokeWidth="1.5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <hr className="ml-0 lg:ml-40 border-grey-custom mt-8 mb-8"/>

                    <div className="flex flex-col pl-0 lg:pl-40">
                        <div className="flex items-center">
                            <img src="/buttonOurvision3.svg" alt="none" style={{userSelect: "none"}}/>
                            <div className="font-satoshiBold text-white flex flex-col pl-7 text-lg md:text-xl lg:text-22">
                                <span>Launching the </span>
                                <span>future</span>
                            </div>
                            <div className="pl-4 lg:pl-56 pt-2 lg:pt-7">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8 11L14 5" stroke="white" strokeWidth="1.5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <hr className="ml-0 lg:ml-40 border-grey-custom mt-8 mb-8"/>

                    <div className="flex flex-col pl-0 lg:pl-40">
                        <div className="flex items-center">
                            <img src="/buttonOurvision4.svg" alt="none" style={{userSelect: "none"}}/>
                            <div className="font-satoshiBold text-white flex flex-col pl-7 text-lg md:text-xl lg:text-22">
                                <span>Limitless Possibilities of AI</span>
                                <span>& Crypto</span>
                            </div>
                            <div className="pl-4 lg:pl-24 pt-2 lg:pt-7">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8 11L14 5" stroke="white" strokeWidth="1.5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurVisionSection;

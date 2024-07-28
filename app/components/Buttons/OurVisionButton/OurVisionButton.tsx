import React from 'react';

const OurVisionButton = () => {
    return (
        <div className="px-4 md:px-16 lg:pl-40 flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="mb-4 md:mb-0">
                    <img src="/buttonOurvision1.svg" alt="Icon" className="h-12 w-12 md:h-16 md:w-16" />
                </div>

                <div className="font-satoshiBold text-lg md:text-xl lg:text-22 flex flex-col pl-0 md:pl-7 pt-2 md:pt-5">
                    <span>Profitability and</span>
                    <span>Growth</span>
                </div>
                <div className="mt-4 md:mt-0 md:pl-8 lg:pl-52">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8L7 2L13 8" stroke="white" strokeWidth="1.5"/>
                    </svg>
                </div>
            </div>

            <div className="text-sm md:text-base lg:text-lg md:pl-28">
                At Creon, we handpick cutting-edge AI projects and offer our community and token
                holders early access and investment opportunities.
                Our community actively contributes to the growth and
                profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
            </div>
        </div>
    );
};

export default OurVisionButton;

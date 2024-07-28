import React from 'react';
import TokenComponent from "@/app/components/TokenComponent/TokenComponent";

const SoonSection = () => {
    return (
        <div className="px-4 bg-black md:px-16 lg:px-60 pb-20 pt-10">
            <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0">
                <TokenComponent condition={true} subTitle="The Gateway token to the world of AI" title="token">
                    <img src="/token1.png" alt="Token 1" className="w-full h-auto"/>
                </TokenComponent>
                <TokenComponent condition={false} subTitle="Driving income and growth through decentralization" title="revenue">
                    <img src="/token2.png" alt="Token 2" className="w-full h-auto"/>
                </TokenComponent>
                <TokenComponent condition={true} subTitle="Driving the future of AI Innovation" title="launchpad">
                    <img src="/token3.png" alt="Token 3" className="w-full h-auto"/>
                </TokenComponent>
            </div>
        </div>
    );
};

export default SoonSection;

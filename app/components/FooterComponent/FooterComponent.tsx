import React from 'react';

interface FooterComponentProps {
    children: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
}

const FooterComponent: React.FC<FooterComponentProps> = ({children, title, description}) => {
    return (
        <div className="relative">
            <div className="bg-grey-custom rounded-[6px] mb-5">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col pt-10 pl-10 pb-10 pr-10">
                        <span className="uppercase text-4xl font-momentExtended">{title}</span>
                        <span className="font-satoshiRegular">{description}</span>
                    </div>
                    <div className="hidden lg:block w-full lg:w-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;

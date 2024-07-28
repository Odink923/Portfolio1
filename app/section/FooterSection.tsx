import React from 'react';
import FooterComponent from "@/app/components/FooterComponent/FooterComponent";

const FooterSection = () => {
    return (
        <div className="px-4 text-white md:px-16 lg:px-60 pt-16">
            <FooterComponent 
                title="AI Prospects, Market Size, and Development Pace"
                description="The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.">
                <img src="/footer1.png" alt="AI Market Size" className="w-full h-auto"/>
            </FooterComponent>
            <FooterComponent 
                title="AI Tools and Market"
                description="AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.">
                <img src="/footer2.png" alt="AI Tools" className="w-full h-auto"/>
            </FooterComponent>
            <FooterComponent
                title="AI, Crypto, and NFT Market"
                description="Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.">
                <img src="/footer3.png" alt="AI and Blockchain" className="w-full h-auto"/>
            </FooterComponent>
            <div className="flex flex-col md:flex-row items-center justify-between mt-8">
                <span className="flex items-center mb-4 md:mb-0">
                    <svg width="240" height="16" viewBox="0 0 240 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG content */}
                    </svg>
                    <img className="pl-4" src="/conectButtons.svg" alt="Connect Buttons"/>
                </span>
                <svg width="190" height="21" viewBox="0 0 190 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG content */}
                </svg>
            </div>
        </div>
    );
};

export default FooterSection;

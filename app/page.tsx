import Image from "next/image";
import LeadSection from "@/app/section/LeadSection";
import React from "react";
import MainBackground from "@/app/components/BackgroundComponents/MainBackground";
import CreonPassSection from "@/app/section/CreonPassSection";
import ProfitingSection from "@/app/section/ProfitingSection";
import OurVisionSection from "@/app/section/OurVisionSection";
import SoonSection from "@/app/section/SoonSection";
import FooterSection from "@/app/section/FooterSection";
import FooterBackground from "@/app/components/BackgroundComponents/FooterBackground";


export default function Home() {
  return (
      <main>


          <MainBackground>
              <LeadSection></LeadSection>
          </MainBackground>
          <CreonPassSection></CreonPassSection>
          <ProfitingSection></ProfitingSection>
          <OurVisionSection></OurVisionSection>
          <SoonSection></SoonSection>

          <FooterBackground>
          <FooterSection></FooterSection>
          </FooterBackground>

      </main>
  );
}

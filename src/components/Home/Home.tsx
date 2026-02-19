import React from "react";
import HeroSection from "./HeroSection";
import SobreSection from "./SobreSection";
import PartnersSection from "./PartnersSection";
import QuemSomosSection from "./QuemSomosSection";
import MissaoVisaoValoresSection from "./MissaoVisaoValoresSection";
import RedeSection from "./RedeSection";
import ParaQuemSection from "./ParaQuemSection";
import AtividadesSection from "./AtividadesSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SobreSection />
      <PartnersSection />
      <QuemSomosSection />
      <MissaoVisaoValoresSection />
      <RedeSection />
      <ParaQuemSection />
      <AtividadesSection />
    </>
  );
};

export default Home;

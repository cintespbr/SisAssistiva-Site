import React from "react";
import HeroSection from "./HeroSection";
import SobreSection from "./SobreSection";
import PartnersSection from "./PartnersSection";
import QuemSomosSection from "./QuemSomosSection";
import MissaoVisaoValoresSection from "./MissaoVisaoValoresSection";
import RedeSection from "./RedeSection";
import ParaQuemSection from "./ParaQuemSection";
import AtividadesSection from "./AtividadesSection";
import ContactSection from "./ContactSection";
import PopupLancamento from "./PopupLancamento";

const Home: React.FC = () => {
  return (
    <>
      <PopupLancamento />
      <HeroSection />
      <SobreSection />
      <PartnersSection />
      <QuemSomosSection />
      <MissaoVisaoValoresSection />
      <RedeSection />
      <ParaQuemSection />
      <AtividadesSection />
      <ContactSection />
    </>
  );
};

export default Home;

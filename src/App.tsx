import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import VLibras from "./components/VLibras";
import MapaPreview from "./components/Mapa/Mapa";
import MapaRedirect from "./components/Mapa/MapaRedirect";
import ContactPage from "./components/Contact/ContactPage";
import Parthers from "./components/Parthers/Parthers";
import Vitrine from "./components/Vitrine/Vitrine";

const App = () => {
  return (
    <MainLayout>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos-destaque" element={<Projects />} />
        <Route path="/mapa-interativo" element={<MapaPreview />} />
        <Route path="/mapa-preview" element={<MapaRedirect />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/parceiros" element={<Parthers />} />
        <Route path="/vitrine" element={<Vitrine />} />
      </Routes>
      <VLibras />
    </MainLayout>
  );
};

export default App;

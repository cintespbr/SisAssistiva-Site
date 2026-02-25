import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import VLibras from "./components/VLibras";
import MapaPreview from "./components/Mapa/Mapa";
import MapaRedirect from "./components/Mapa/MapaRedirect";

const App = () => {
  return (
    <MainLayout>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos-destaque" element={<Projects />} />
        <Route path="/mapa-interativo" element={<MapaPreview />} />
        <Route path="/mapa-preview" element={<MapaRedirect />} />
      </Routes>
      <VLibras />
    </MainLayout>
  );
};

export default App;

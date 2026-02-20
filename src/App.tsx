import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import VLibras from "./components/VLibras";

const App = () => {
  return (
    <MainLayout>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos-destaque" element={<Projects />} />
      </Routes>
      <VLibras />
    </MainLayout>
  );
};

export default App;

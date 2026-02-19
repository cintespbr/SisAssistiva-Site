import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <MainLayout>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
};

export default App;

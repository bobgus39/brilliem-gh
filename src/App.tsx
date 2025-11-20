import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ModelsPage from "@/pages/models";
import SpacesPage from "@/pages/spaces";
import IndustryPage from "@/pages/industry";
import AboutPage from "@/pages/about";
import LogosPage from "@/pages/logos";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ModelsPage />} path="/Models" />
      <Route element={<SpacesPage />} path="/spaces" />
      <Route element={<IndustryPage />} path="/industry" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<LogosPage />} path="/logos" />
    </Routes>
  );
}

export default App;

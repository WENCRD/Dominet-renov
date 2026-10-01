import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import RealisationsPage from "./pages/RealisationsPage";
import ScrollToHash from "./components/ScrollToHash";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:slug" element={<ServicePage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
      </Routes>
    </>
  );
}

export default App;
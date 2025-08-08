import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

// import PhotosPage from "./pages/PhotosPage";
// import DevisPage from "./pages/DevisPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/photos" element={<PhotosPage />} />
        <Route path="/devis" element={<DevisPage />} /> */}
        {/* Ajoute d'autres routes ici si besoin */}
      </Routes>
    </>
  );
}

export default App; // ✅ Manquait

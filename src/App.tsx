import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import OurworkPage from "./pages/OurworkPage";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<OurworkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

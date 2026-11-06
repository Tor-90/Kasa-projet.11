import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";

function AppRouter() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;
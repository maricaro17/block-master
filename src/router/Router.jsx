import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Peliculas from "../pages/Peliculas";
import PeliculasLeast from "../pages/PeliculasLeast";
import PeliculasTop from "../pages/PeliculasTop";
import Registro from "../pages/Registro";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Peliculas />} />
          <Route path="/mas-valoradas" element={<PeliculasTop />} />
          <Route path="/menos-valoradas" element={<PeliculasLeast />} />
          <Route path="/register" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

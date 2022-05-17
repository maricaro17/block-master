import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import CargarPeliculas from "../pages/CargarPeliculas";
import Login from "../pages/Login";
import Peliculas from "../pages/Peliculas";
import PeliculasLeast from "../pages/PeliculasLeast";
import PeliculasTop from "../pages/PeliculasTop";
import Registro from "../pages/Registro";
import { PrivateRouter } from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Peliculas />} />
          <Route path="/mas-valoradas" element={<PeliculasTop />} />
          <Route path="/menos-valoradas" element={<PeliculasLeast />} />
          <Route
            path="/register"
            element={
              <PublicRouter>
                <Registro />
              </PublicRouter>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          <Route
            path="/cargar-peliculas"
            element={
              <PrivateRouter>
                <CargarPeliculas />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

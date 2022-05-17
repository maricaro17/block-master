import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import { auth } from "../config/firebaseConfig";
import CargarPeliculas from "../pages/CargarPeliculas";
import Login from "../pages/Login";
import Peliculas from "../pages/Peliculas";
import PeliculasLeast from "../pages/PeliculasLeast";
import PeliculasTop from "../pages/PeliculasTop";
import Registro from "../pages/Registro";
import { login } from "../redux/actions/authAction";
import { PrivateRouter } from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      }
    })
  }, [dispatch]);
  
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

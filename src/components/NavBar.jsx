import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  buscarPelicula,
  getPeliculas,
  getPeliculasLeast,
  getPeliculasTop
} from "../redux/actions/peliculaAction";
import { Types } from "../redux/type";
import Buscador from "./Buscador";
const NavBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const user = useSelector((store) => store.auth);

  const location = useLocation();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length < 1) {
      switch (location.pathname) {
        case "/menos-valoradas":
          dispatch(getPeliculasLeast("least"));
          break;
        case "/mas-valoradas":
          dispatch(getPeliculasTop("top"));
          break;
        default:
          dispatch(getPeliculas({ action: "get" }));
      }
      dispatch({
        type: Types.searchTitle,
        payload: {
          isSearch: false
        }
      });
    }
  };

  return (
    <div>
      <Navbar bg="black">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652328491/block-master/logo-blockBuster_pj2yta.svg"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/"
            >
              Todas
            </Link>
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/mas-valoradas"
            >
              Mas Valoradas
            </Link>
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/menos-valoradas"
            >
              Menos Valoradas
            </Link>
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/register"
            >
              Registro
            </Link>
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/cargar-peliculas"
              style={{ display: user?.isAuthenticated ? "block" : "none" }}
            >
              Cargar Peliculas
            </Link>
          </Nav>
          <Buscador
            filter={buscarPelicula}
            handleSearch={handleSearch}
            searchTerm={searchTerm}
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

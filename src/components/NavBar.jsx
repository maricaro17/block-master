import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showModalRegisterPeliculas } from "../redux/actions/peliculaAction";
import Buscador from "./Buscador";
import { GrAdd } from "react-icons/gr";
const NavBar = () => {
  const dispatch = useDispatch();
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
            >
              Cargar Peliculas
            </Link>
          </Nav>
          <Buscador />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

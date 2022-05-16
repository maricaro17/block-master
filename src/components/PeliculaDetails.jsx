import React from "react";
import { Container, Modal } from "react-bootstrap";
import YouTube from "react-youtube";
import CustomizeButton from "./CustomizeButton";
import { FaPlay, FaPlus, FaTimes, FaTrash } from "react-icons/fa";

import { ImPencil } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deletePelicula, hideDetails, showModalRegisterPeliculas } from "../redux/actions/peliculaAction";

const PeliculaDetails = ({ show, onHide, peliculaSelect }) => {
  const dispatch = useDispatch()  
  const genero = peliculaSelect.genero || [""];
  const trailerId = peliculaSelect.trailer
    ? peliculaSelect.trailer.split("=").pop()
    : "";

  const handleEdit = (e, pelicula)=>{
    dispatch(showModalRegisterPeliculas())
    dispatch(hideDetails())
  }
 
  return (
    <div className="d-flex">
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Container className="d-flex justify-content-end text-white">
          <CustomizeButton
            className="bg-transparent text-white"
            type="button"
            Icon={ImPencil}
            iconSize={20}
            onClick={(e) => handleEdit(e,peliculaSelect)}
          />
          <CustomizeButton
            className="bg-transparent text-danger"
            type="button"
            Icon={FaTrash}
            iconSize={20}
            onClick={()=>dispatch(deletePelicula(peliculaSelect))}
          />
          <CustomizeButton
            className="bg-transparent text-white"
            type="button"
            Icon={FaTimes}
            iconSize={20}
            onClick={onHide}
          />
        </Container>

        <Modal.Body className="d-flex flex-row justify-content-around flex-wrap">
          <div>
            <img
              src={peliculaSelect.imagenUrl}
              alt={peliculaSelect.name}
              width="220"
              height="330"
              className="rounded"
            />
          </div>
          <div>
            <h1>{peliculaSelect?.name}</h1>
            <p>{peliculaSelect?.detalle}</p>
            <p>
              {peliculaSelect?.year} • {genero.join("/")} •{" "}
              {peliculaSelect?.duracion}
            </p>

            <div
              className="d-flex"
              style={{
                bottom: "15px",
                left: "50px",
              }}
            >
              <CustomizeButton
                custom="primary"
                value="Ver Ahora"
                margin="0px 5px"
                Icon={FaPlay}
                iconSize="15"
                iconClassName="mx-1"
                className="text-uppercase bold"
              />
              <CustomizeButton
                custom="dark"
                value="Ver Despues"
                margin="0px 5px"
                borderColor="primary"
                Icon={FaPlus}
                iconSize="15"
                iconClassName="mx-1"
                className="text-uppercase bold"
              />
            </div>
          </div>
        </Modal.Body>
        {trailerId.length > 0 ? (
          <>
            <h2>Trailer</h2>
            <div className="d-flex flex-wrap justify-content-center">
              <YouTube className="" videoId={trailerId} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
};

export default PeliculaDetails;

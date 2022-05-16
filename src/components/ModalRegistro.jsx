import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormPeliculas from "./FormPeliculas";

function ModalRegistro({ show, onHide }) {
  const pelicula = useSelector((store) => store.peliculaSelect);
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ backgroundColor: "black" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {pelicula.id ? "Actualizar pelicula" : "Agregar nueva pelicula"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormPeliculas />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Salir</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRegistro;

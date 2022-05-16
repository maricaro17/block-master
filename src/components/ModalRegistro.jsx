import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormPeliculas from "./FormPeliculas";

function ModalRegistro({ show, onHide }) {
  const param = useParams();
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ backgroundColor: "black" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {param.id ? "Actualizar pelicula" : "Agregar nueva pelicula"}
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

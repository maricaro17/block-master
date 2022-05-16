import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import CustomizeButton from "./CustomizeButton";
import makeAnimated from "react-select/animated";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import constantes from "../utils/constantes";
import { components } from "react-select";
import Select from "./Select";
import { createPelicula, hideModalRegisterPeliculas, updatePelicula } from "../redux/actions/peliculaAction";

const FormPeliculas = () => {
  const dispatch = useDispatch();
  const customPrimary = "#fed941";
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      "&:hover": {
        backgroundColor: customPrimary,
      },
      color: "#000",
      backgroundColor: state.isSelected ? customPrimary : "#fff",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: customPrimary,
      };
    },
  };
  const [optionSelected, setOptionSelected] = useState(null);

  const initialState = {
    name: "",
    detalle: "",
    genero: [],
    duracion: "",
    year: 0,
    rate: 0,
    imagenUrl: "",
    trailer: "",
  };
  const { loading } = useSelector((store) => store.ui);
  const pelicula = useSelector((store) => store.peliculaSelect);
  const [form, handleInputChange, handleFileChange, handleClickFile, reset] =
    useForm(pelicula.id ? pelicula : initialState);
  const handleChangeSelect = (selected) => {
    setOptionSelected(selected);
    const e = {
      target: {
        name: "genero",
        value: selected.map((s) => s.label),
      },
    };
    handleInputChange(e);
  };
  const { name, detalle, duracion, year, rate, imagenUrl, trailer } = form;

  const MultiValue = (props) => (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  );
  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const animatedComponents = makeAnimated();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pelicula.id) {
      dispatch(createPelicula({ ...form, rate: Number(form.rate) }));
      reset();
    } else {
      dispatch(updatePelicula(pelicula.id, form))
      dispatch(hideModalRegisterPeliculas())
    }
  };

  useEffect(()=>{
    

  },[pelicula, dispatch])
  return (
    <Container className="d-flex movieForm">
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Titulo:</Form.Label>
            <Form.Control
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Nombre de la pelicula"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="detalle"
              value={detalle}
              onChange={handleInputChange}
              placeholder="Descripción"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Poster:</Form.Label>
            <div
              className=""
              style={{
                display: "flex",
              }}
            >
              <Form.Control
                className=""
                type="file"
                name="file"
                id="fileSelector"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <Form.Control
                className="w-75"
                type="text"
                name="imagenUrl"
                id="image"
                readOnly
                style={{
                  borderRadius: "2px 0px 0px 2px",
                }}
                value={pelicula.id ? pelicula.imagenUrl : imagenUrl}
                placeholder="Seleccione un archivo"
              />

              <CustomizeButton
                className="w-25 float-left"
                custom="primary"
                onClick={handleClickFile}
                type="button"
                value={pelicula.id ? "Actualizar Poster" : "Cargar Poster"}
                borderRadius="0px 2px 2px 0px"
                disabled={loading}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Año:</Form.Label>
            <Form.Control
              name="year"
              type="number"
              value={year}
              onChange={handleInputChange}
              placeholder="Año de estreno"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duración:</Form.Label>
            <Form.Control
              name="duracion"
              value={duracion}
              onChange={handleInputChange}
              placeholder="Duración 1h 1m"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Calificación:</Form.Label>
            <Form.Control
              name="rate"
              type="number"
              value={rate}
              onChange={handleInputChange}
              placeholder="Calificación"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Genero:</Form.Label>

            <Select
              isMulti
              styles={customStyles}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{ Option, MultiValue, animatedComponents }}
              allowSelectAll={false}
              placeholder="Selecciona los generos asociados"
              value={
                pelicula?.id
                  ? constantes.GENEROS_PELICULAS.filter(
                      (item, index) => item.label === pelicula.genero[index]
                    )
                  : optionSelected
              }
              options={constantes.GENEROS_PELICULAS}
              onChange={handleChangeSelect}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Trailer:</Form.Label>
            <Form.Control
              name="trailer"
              type="text"
              value={trailer}
              onChange={handleInputChange}
              placeholder="Trailer Url"
            />
          </Form.Group>
          <CustomizeButton
            className="float-end-flex"
            type="submit"
            custom="primary"
            value={pelicula.id ? "Actualizar " : "Cargar Pelicula"}
            onClick={handleSubmit}
            margin="10px 0px"
          />
        </Form>
      </Container>
    </Container>
  );
};

export default FormPeliculas;

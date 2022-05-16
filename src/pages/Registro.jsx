import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomizeButton from "../components/CustomizeButton";
import constantes from "../utils/constantes";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterWithEmailPasswordName } from "../redux/actions/authAction";

const Registro = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store)=> store.ui);
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "El nombre es muy corto")
        .required("Escribe tu nombre"),
      lastname: Yup.string()
        .min(3, "El nombre es muy corto")
        .required("Escribe tus apellidos"),
      email: Yup.string().email("Email invalido").required("Email requerido"),
      password: Yup.string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w*\W*]/,
          "La contraseña debe tener minimo un numero, una mayuscula y un minuscula."
        )
        .required("Escribe tu contraseña."),
      password2: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben ser iguales")
        .required("Escribe tu contraseña."),
    }),
    onSubmit: (data) => {
        console.log("texto normal");
        console.log(data);
      dispatch(startRegisterWithEmailPasswordName(data));
    },
  });
  const {
    name,
    lastname,
    email,
    password,
    password2,
  } = formik.values;
  return (
    <Container
      className="d-flex m-auto align-self-center"
      style={{
        height: "80vh",
      }}
    >
      <Form onSubmit={formik.handleSubmit} className="m-auto">
        <h1 className="mb-3 font-weight-normal">Registro</h1>

        <Form.Group className="mb-3">
          <Form.Label>{constantes.NAME}</Form.Label>
          <Form.Control
            className="mb-1"
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            value={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>{constantes.NAME}</Form.Label>
          <Form.Control
            className="mb-1"
            type="text"
            placeholder="Ingrese su apellido"
            name="lastname"
            value={lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{constantes.EMAIL}</Form.Label>
          <Form.Control
            className="mb-1"
            type="email"
            placeholder="Ingrese su Email"
            name="email"
            value={email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{constantes.CONTRASENA}</Form.Label>
          <Form.Control
            className="mb-1"
            type="password"
            placeholder="Ingrese su Contraseña"
            name="password"
            value={password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{constantes.CONFIRMAR_CONTRASENA}</Form.Label>
          <Form.Control
            className="mb-1"
            type="password"
            placeholder="Confirme su contraseña"
            name="password2"
            value={password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <CustomizeButton
          custom="primary"
          type="submit"
          className="my-1 btn-socials align-self-center"
          value={constantes.REGISTER}
          disabled={loading}
        />
        <p>
          ¿Ya Tienes una cuenta?{" "}
          <span>
            <Link to="/login" className="custom-text-primary">
              {constantes.SIGN_IN}
            </Link>
          </span>
        </p>
      </Form>
    </Container>
  );
};

export default Registro;

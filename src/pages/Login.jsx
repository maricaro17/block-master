import React from 'react'
import { Container, Form } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomizeButton from '../components/CustomizeButton';
import { useForm } from '../hooks/useForm';
import { loginEmailPassword, loginFacebook, loginGoogle } from '../redux/actions/authAction';
import constantes from "../utils/constantes";

const Login = () => {

  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });
  const { loading } = useSelector((state) => state.ui);
  const { email, password } = values;

  const handleloginGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleLoginWithFacebook = () => {
    dispatch(loginFacebook());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
    reset();
  };

  const BtnSocial = () => {
    return (
      <Container className="d-flex justify-content-between  m-auto">
        <CustomizeButton
          custom="google"
          value={constantes.SIGN_IN_GOOGLE}
          Icon={FcGoogle}
          iconClassName="m-1"
          iconSize={20}
          onClick={handleloginGoogle}
          margin="5px"
          className="custom-btn-social"
        />
        <CustomizeButton
          custom="facebook"
          value={constantes.SIGN_IN_FACEBOOK}
          Icon={FaFacebook}
          iconClassName="m-1"
          iconSize={20}
          onClick={handleLoginWithFacebook}
          margin="5px"
          className="custom-btn-social"
        />
      </Container>
    );
  };
  return (
    <Container
    className="d-flex m-auto flex-column align-self-center"
    style={{
      height: "80vh",
    }}
  >
    <h1 className="text-center my-5">{constantes.SIGN_IN}</h1>

    <Form className="m-auto" onSubmit={handleSubmit} method="POST">
      <BtnSocial />
      <div className="divider">Or</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{constantes.EMAIL}</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{constantes.CONTRASENA}</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </Form.Group>

      <CustomizeButton
        custom="primary"
        type="submit"
        className="my-1 btn-socials align-self-center"
        value={constantes.SIGN_IN}
        disabled={loading}
      />
      <hr />

      <p className=" float-end">
        ¿No tienes una cuenta?{" "}
        <Link to="/signup" className="custom-text-primary">
          Registrate
        </Link>
      </p>
    </Form>
  </Container>
  )
}




export default Login
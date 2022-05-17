import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import CustomizeButton from '../components/CustomizeButton';

const Login = () => {
  return (
    <div>Login</div>
  )
}

const SocialsButtons = () => {
  return (
    <Container className="d-flex justify-content-between  m-auto">
      <CustomizeButton
        custom="google"
        value={SIGN_IN_WITH_GOOGLE}
        Icon={FcGoogle}
        iconClassName="m-1"
        iconSize={20}
        onClick={handleloginGoogle}
        margin="5px"
        className="custom-btn-social"
      />
      <CustomizeButton
        custom="facebook"
        value={SIGN_IN_WITH_FACEBOOK}
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

export default Login
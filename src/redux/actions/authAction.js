import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { auth, db, google } from "../../config/firebaseConfig";
import { Types } from "../type";

const startRegisterWithEmailPasswordName = ({
  name,
  lastname,
  email,
  password
}) => {
  return async (dispatch) => {
    try {
      const newUsr = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(collection(db, "usuarios"), newUsr.user.uid), {
        name: `${name} ${lastname}`,
        email
      });
      Swal.fire({
        position: "center",
        text: `Registro Exitoso`,
        icon: "success",
        title: "Exitoso!!",
        showConfirmButton: false,
        timer: 1500
      });
      dispatch(register(newUsr.user.uid, name, email));
    } catch (error) {
      Swal.fire({
        position: "center",
        text: `Ocurrio un error`,
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
};
const register = (id, name, email) => {
  return {
    type: Types.authRegister,
    payload: { id, name, email }
  };
};

const login = (user) => {
  return {
    type: Types.login,
    payload: {
      id: user.uid,
      name: user.displayName,
      isAuthenticated: true
    }
  };
};

const logout = () => {
  return (dispatch) => {
    signOut(auth).then(() => {
      dispatch({
        type: Types.logout,
        payload: {
          isAuthenticated: false
        }
      });
    });
  };
};

const loginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, google).then((result) => {
      const user = result.user;
      dispatch(login(user));
    });
  };
};

const loginFacebook = () => {};
const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      dispatch(login(user));
    }).catch((err)=>{
      Swal.fire({
        position: "center",
        text: `${err.message}`,
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };
};
export {
  startRegisterWithEmailPasswordName,
  loginEmailPassword,
  loginFacebook,
  loginGoogle,
  logout,
  login
};

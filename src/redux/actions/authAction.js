import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../config/firebaseConfig";
import { Types } from "../type";

const startRegisterWithEmailPasswordName = ({
  name,
  lastname,
  email,
  password,
}) => {
  return async (dispatch) => {
    const auth = getAuth();
    try {
      const newUsr = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(collection(db, "usuarios"), newUsr.user.uid), {
        name: `${name} ${lastname}`,
        email,
      });
      Swal.fire({
        position: "center",
        text: `Registro Exitoso`,
        icon: "success",
        title: "Exitoso!!",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(register(newUsr.user.uid, name, email));
    } catch (error) {
        console.log(error)
    }
  };
};
const register = (id, name, email) => {
    console.log(name)
  return {
    type: Types.authRegister,
    payload: { id, name, email },
  };
};

export { startRegisterWithEmailPasswordName };

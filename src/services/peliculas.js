import { db } from "../config/firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

const coleccion = "Pelicula";

const findAll = async (dispatch, types) => {
  const peliculas = await getDocs(collection(db, coleccion));
  const list = [];
  peliculas.forEach((doc) => {
    list.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  dispatch({
    type: types.peliculasList,
    payload: list,
  });
};

const create = async (data) => {
  try {
    await setDoc(doc(collection(db, coleccion)), data);
    return true;
  } catch (error) {
    return false;
  }
};

const findByRate = async (rate) => {
  let consulta;
  if (rate === "top") {
    consulta = query(collection(db, coleccion), where("rate", ">", 5));
  }

  if (rate === "least") {
    consulta = query(collection(db, coleccion), where("rate", "<=", 5));
  }

  const list = [];
  const peliculas = await getDocs(consulta);
  peliculas.forEach((pelicula) => {
    list.push({
      id: pelicula.id,
      ...pelicula.data(),
    });
  });
  return list;
};


const remove = async (id)=>{
  try {
    deleteDoc(doc(db, coleccion, id))
    return true
  } catch (error) {
    return false
  }
 
}
const Peliculas = { findAll, create, findByRate, remove };
export default Peliculas;
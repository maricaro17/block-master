import { db } from "../config/firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  query,
  where,
  deleteDoc,
  getDoc,
  limit,
  orderBy,
  startAfter,
  startAt
} from "firebase/firestore";

const coleccion = "Pelicula";
let primerDocumento, ultimoDocumento;
const findAll = async (dispatch, types) => {
  const peliculas = await getDocs(
    query(collection(db, coleccion), orderBy("year", "desc"), limit(15))
  );
  const list = [];
  primerDocumento = peliculas.docs[0];
  ultimoDocumento = peliculas.docs[peliculas.docs.length - 1];
  peliculas.forEach((doc) => {
    list.push({
      id: doc.id,
      ...doc.data()
    });
  });
  dispatch({
    type: types.peliculasList,
    payload: list
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
  switch (rate) {
    case "top":
      consulta = query(
        collection(db, coleccion),
        limit(15),
        where("rate", ">", 5)
      );
      break;
    case "least":
      consulta = query(
        collection(db, coleccion),
        limit(15),
        where("rate", "<=", 5)
      );
      break;
    case "nextTopPage":
      consulta = query(
        collection(db, coleccion),
        startAfter(ultimoDocumento),
        limit(15),
        where("rate", ">", 5)
      );
      break;
    case "prevTopPage":
      consulta = query(
        collection(db, coleccion),
        startAfter(primerDocumento),
        startAt(primerDocumento),
        limit(15),
        where("rate", ">", 5)
      );
      break;
    case "nextLeastPage":
      consulta = query(
        collection(db, coleccion),
        startAfter(ultimoDocumento),
        limit(15),
        where("rate", "<=", 5)
      );
      break;
    case "prevLeastPage":
      consulta = query(
        collection(db, coleccion),
        startAfter(primerDocumento),
        startAt(primerDocumento),
        limit(15),
        where("rate", "<=", 5)
      );
      break;
    default:
      break;
  }

  const list = [];
  const peliculas = await getDocs(consulta);
  if (rate === "top" || rate === "least") {
    primerDocumento = peliculas.docs[0];
    ultimoDocumento = peliculas.docs[peliculas.docs.length - 1];
  }
  peliculas.forEach((pelicula) => {
    list.push({
      id: pelicula.id,
      ...pelicula.data()
    });
  });
  return list;
};

const update = async (id, data) => {
  try {
    await setDoc(doc(db, coleccion, id), data);
    const pelicula = await getDoc(doc(db, coleccion, id));
    const result = { id: id, ...pelicula.data() };
    return result;
  } catch (error) {
    error.message = "Ha ocurrido un error";
    return error;
  }
};

const remove = async (id) => {
  try {
    deleteDoc(doc(db, coleccion, id));
    return true;
  } catch (error) {
    return false;
  }
};
const next = async (dispatch, types) => {
  const peliculas = await getDocs(
    query(
      collection(db, coleccion),
      orderBy("year", "desc"),
      startAfter(ultimoDocumento),
      limit(15)
    )
  );
  const list = [];
  peliculas.forEach((doc) => {
    list.push({
      id: doc.id,
      ...doc.data()
    });
  });
  dispatch({
    type: types.peliculasList,
    payload: list
  });
};
const previous = async (dispatch, types) => {
  const peliculas = await getDocs(
    query(
      collection(db, coleccion),
      orderBy("year", "desc"),
      startAfter(primerDocumento),
      startAt(primerDocumento),
      limit(15)
    )
  );
  const list = [];
  peliculas.forEach((doc) => {
    list.push({
      id: doc.id,
      ...doc.data()
    });
  });
  dispatch({
    type: types.peliculasList,
    payload: list
  });
};

const search = async (search, dispatch, types) => {
  const peliculas = await getDocs(
    query(collection(db, coleccion), orderBy("year", "desc"), limit(10000))
  );
  const list = [];
  peliculas.forEach((doc) => {
    list.push({
      id: doc.id,
      ...doc.data()
    });
  });
  console.log(search);
  const regexp = new RegExp(search, "i");
  const movies = list.filter((movie) => regexp.test(movie.name));
  dispatch({
    type: types.search,
    payload: movies
  });
  dispatch({
    type: types.searchTitle,
    payload: {
      isSearch: true,
      searchTerm: search
    }
  });
};
const Peliculas = {
  findAll,
  create,
  findByRate,
  update,
  remove,
  next,
  previous,
  search
};
export default Peliculas;

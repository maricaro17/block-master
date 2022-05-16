import constantes from "../../utils/constantes";
import { Types } from "../type";

const initialState = {
  name: "pelicula",
  imagenUrl: constantes.DEFAULT_PELICULA_POSTER,
  rate: 0,
  genero: ["example1", "example2"],
};

const stateList = [initialState];
const peliculaReducer = (state = stateList, action) => {
  switch (action.type) {
    case Types.peliculasList:
    case Types.peliculasTopList:
    case Types.peliculasLeastList:
      return action.payload;
    default:
      return state;
  }
};
const selectPeliculasReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.peliculaSelect:
      return action.payload;
    case Types.updatePelicula:
      return action.payload;
    case Types.peliculaDeselect:
      return action.payload;
    default:
      return state;
  }
};

const showModalRegisterPeliculasReducer = (state = false, action) => {
  switch (action.type) {
    case Types.showModalPeliculasRegister:
      return action.payload;
    case Types.hideModalPeliculasRegister:
      return action.payload;
    default:
      return state;
  }
};

const showDetailsReducer = (state = false, action) => {
  switch (action.type) {
    case Types.showModalPeliculaDetails:
      return action.payload;
    case Types.hideModalPeliculaDetails:
      return action.payload;
    default:
      return state;
  }
};
export {
  peliculaReducer,
  showModalRegisterPeliculasReducer,
  showDetailsReducer,
  selectPeliculasReducer,
};

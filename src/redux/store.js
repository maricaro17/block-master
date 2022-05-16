import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { bannersReducer } from "./reducers/bannerReducer";
import {
  peliculaReducer,
  selectPeliculasReducer,
  showDetailsReducer,
  showModalRegisterPeliculasReducer,
} from "./reducers/peliculasReducer";
import { uiReducer } from "./reducers/uiReducer";

const reducers = combineReducers({
  banners: bannersReducer,
  peliculas: peliculaReducer,
  peliculaSelect: selectPeliculasReducer,
  modalPeliculas: showModalRegisterPeliculasReducer,
  showDetails: showDetailsReducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: reducers,
});
export default store;

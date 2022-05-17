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
import { searchReducer } from "./reducers/searchReducer";
import { loginReducer } from "./reducers/authReducer";

const reducers = combineReducers({
  banners: bannersReducer,
  peliculas: peliculaReducer,
  peliculaSelect: selectPeliculasReducer,
  modalPeliculas: showModalRegisterPeliculasReducer,
  showDetails: showDetailsReducer,
  search: searchReducer,
  ui: uiReducer,
  auth: loginReducer
});

const store = configureStore({
  reducer: reducers,
});
export default store;

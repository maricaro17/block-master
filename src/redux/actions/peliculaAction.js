import Peliculas from "../../services/peliculas";
import { Types } from "../type";
import Swal from "sweetalert2";
import { finishLoading, startLoading } from "./uiAction";
const selectPelicula = (pelicula) => {
  return (dispatch) => {
    dispatch({
      type: Types.peliculaSelect,
      payload: pelicula,
    });
  };
};

const deselectPelicula = () => {
  return (dispatch) => {
    dispatch({
      type: Types.peliculaDeselect,
      payload: {},
    });
  };
};
const createPelicula = (data) => {
  return (dispatch) => {
    const pelicula = Peliculas.create(data);
    if (pelicula) {
      dispatch(startLoading());
      Swal.fire({
        position: "center",
        text: "Carga Exitosa",
        icon: "success",
        title: data.name,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(finishLoading());
      dispatch(
        getPeliculas({
          action: "get",
        })
      );
      dispatch(hideModalRegisterPeliculas());
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ha Ocurrido un Error",
        text: "No pudimos cargar la información",
        footer: "",
      });
    }
  };
};

const getPeliculas = (opt) => {
  return (dispatch) => {
    switch (opt.action) {
      case "next":
        return Peliculas.next(dispatch, Types);
      case "previous":
        return Peliculas.previous(dispatch, Types);
      default:
        return Peliculas.findAll(dispatch, Types);
    }
  };
};

const updatePelicula = (id, data) => {
  return (dispatch) => {
    dispatch(startLoading());
    Peliculas.update(id, data).then((pelicula) => {
      Swal.fire({
        position: "center",
        text: `${pelicula.name} se actualizó correctamentete`,
        icon: "success",
        title: "Actualización Exitosa",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({
        type: Types.updatePelicula,
        payload: pelicula,
      });
      dispatch(getPeliculas({ action: "get" }));
      dispatch(finishLoading());
    });
  };
};
const showModalRegisterPeliculas = () => {
  return (dispatch) => {
    dispatch({
      type: Types.showModalPeliculasRegister,
      payload: true,
    });
  };
};
const hideModalRegisterPeliculas = () => {
  return (dispatch) => {
    dispatch({
      type: Types.hideModalPeliculasRegister,
      payload: false,
    });
  };
};

const showDetails = () => {
  return (dispatch) => {
    dispatch({
      type: Types.showModalPeliculaDetails,
      payload: true,
    });
  };
};

const hideDetails = () => {
  return (dispatch) => {
    dispatch({
      type: Types.hideModalPeliculaDetails,
      payload: false,
    });
  };
};

const getPeliculasTop = (option) => {
  return (dispatch) => {
    Peliculas.findByRate(option).then((data) => {
      dispatch({
        type: Types.peliculasTopList,
        payload: data,
      });
    });
  };
};
const getPeliculasLeast = (option) => {
  return (dispatch) => {
    Peliculas.findByRate(option).then((data) => {
      dispatch({
        type: Types.peliculasLeastList,
        payload: data,
      });
    });
  };
};

const deletePelicula = (pelicula) => {
  return (dispatch) => {
    const peliculaDeleted = Peliculas.remove(pelicula.id);
    if (peliculaDeleted) {
      dispatch(startLoading());
      Swal.fire({
        position: "center",
        text: `${pelicula.name} ha sido eliminada`,
        icon: "success",
        title: "Eliminado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(finishLoading());
      dispatch(
        getPeliculas({
          action: "get",
        })
      );
      dispatch(hideDetails());
    }
  };
};

const buscarPelicula = (search)=>{
  return (dispatch) => {
    Peliculas.search(search, dispatch, Types);
  };
}

export {
  selectPelicula,
  deselectPelicula,
  createPelicula,
  getPeliculas,
  showDetails,
  hideDetails,
  showModalRegisterPeliculas,
  hideModalRegisterPeliculas,
  getPeliculasTop,
  getPeliculasLeast,
  deletePelicula,
  updatePelicula,
  buscarPelicula
};

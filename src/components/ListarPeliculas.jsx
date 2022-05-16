import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPelicula, showDetails } from "../redux/actions/peliculaAction";
import constantes from "../utils/constantes";
import Calificacion from "./Calificacion";


const ListarPeliculas = ({ peliculas }) => {
  const dispacth = useDispatch();
  const search = useSelector((store) => store.search);
  const handleSelectPelicula = (e, data) => {
    e.preventDefault();
    dispacth(selectPelicula(data));
    dispacth(showDetails())
  };

  return (
    <div className="d-flex flex-wrap justify-content-center mb-5">
      {peliculas.length > 0 ? (
        peliculas.map((pelicula) => (
          <div
            key={pelicula.id}
            className="m-2 rounded"
            onClick={(e) => handleSelectPelicula(e, pelicula)}
          >
            <img
              id={pelicula.id}
              src={pelicula.imagenUrl}
              alt={pelicula.name}
              width="220"
              height="330"
              className="rounded"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = constantes.DEFAULT_PELICULA_POSTER;
              }}
            />
            <Calificacion rate={pelicula.rate || 0} />
          </div>
        ))
      ) : (
        <div className="flex-column">
          <img
            className="m-auto"
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652416259/block-master/Frame_29_tmspfr.svg"
            alt="no se encontro"
          />
          {/* <h5 className="text-center bold">{`No se encontraron resultados para “${search.searchTerm}”`}</h5>
           */}{" "}
        </div>
      )}
    </div>
  );
};

export default ListarPeliculas;

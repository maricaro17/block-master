import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ListarPeliculas from "../components/ListarPeliculas";
import ModalRegistro from "../components/ModalRegistro";
import PeliculaDetails from "../components/PeliculaDetails";
import Slider from "../components/Slider";
import Title from "../components/Title";
import {
  deselectPelicula,
  getPeliculas,
  hideDetails,
  hideModalRegisterPeliculas,
} from "../redux/actions/peliculaAction";
import constantes from "../utils/constantes";

const Peliculas = () => {
  const dispatch = useDispatch();
  const peliculas = useSelector((store) => store.peliculas);
  const peliculaSelect = useSelector((store) => store.peliculaSelect);
  const showModal = useSelector((store) => store.modalPeliculas);
  const showDetails = useSelector((store) => store.showDetails);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (loading) {
      dispatch(
        getPeliculas({
          action: "get",
        })
      );
    }
    return () => setLoading(false);
  }, [dispatch, loading, peliculas, showModal]);

  const handleHiddenForm = ()=>{
    dispatch(deselectPelicula())
    dispatch(hideModalRegisterPeliculas())
  }
  return (
    <div>
      <Slider />
      <Container>
        <Title isSearch={false} title={constantes.TITLE_ALL} />
      </Container>
      <Container>
        <ListarPeliculas peliculas={peliculas} />
      </Container>
      <ModalRegistro
        show={showModal}
        onHide={()=>handleHiddenForm()}
      />
      <PeliculaDetails
        show={showDetails}
        onHide={() => dispatch(hideDetails())}
        peliculaSelect={peliculaSelect}
      />
    </div>
  );
};

export default Peliculas;

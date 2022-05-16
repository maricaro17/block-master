import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ListarPeliculas from '../components/ListarPeliculas'
import ModalRegistro from '../components/ModalRegistro'
import PeliculaDetails from '../components/PeliculaDetails'
import Slider from "../components/Slider"
import Title from '../components/Title'
import { getPeliculasTop, hideDetails, hideModalRegisterPeliculas } from '../redux/actions/peliculaAction'
import constantes from '../utils/constantes'
const PeliculasTop = () => {
    const dispatch = useDispatch();
    const peliculas = useSelector((store) => store.peliculas);
    const peliculaSelect = useSelector((store) => store.peliculaSelect);
    const showModal = useSelector((store) => store.modalPeliculas);
    const showDetails = useSelector((store) => store.showDetails);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      if (loading) {
        dispatch(
          getPeliculasTop()
        );
      }
      return () => setLoading(false);
    }, [dispatch, loading, peliculas, showModal]);
  return (
    <div>
        <Slider/>
        <Container>
        <Title isSearch={false} title={constantes.TITLE_MAS_VALORADAS} />
      </Container>
      <Container>
        <ListarPeliculas peliculas={peliculas} />
      </Container>
      <ModalRegistro
        show={showModal}
        onHide={() => dispatch(hideModalRegisterPeliculas())}
      />
      <PeliculaDetails
        show={showDetails}
        onHide={() => dispatch(hideDetails())}
        peliculaSelect={peliculaSelect}
      />
    </div>
  )
}

export default PeliculasTop
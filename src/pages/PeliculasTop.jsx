import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CustomizeButton from '../components/CustomizeButton'
import ListarPeliculas from '../components/ListarPeliculas'
import ModalRegistro from '../components/ModalRegistro'
import PeliculaDetails from '../components/PeliculaDetails'
import Slider from "../components/Slider"
import Title from '../components/Title'
import { getPeliculasTop, hideDetails, hideModalRegisterPeliculas } from '../redux/actions/peliculaAction'
import constantes from '../utils/constantes'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
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
          getPeliculasTop("top")
        );
      }
      return () => setLoading(false);
    }, [dispatch, loading, peliculas, showModal]);
    const handleNext = () => {
        dispatch(getPeliculasTop("nextTopPage"));
      };
      const handlePrevious = () => {
        dispatch(getPeliculasTop("prevTopPage"));
      };
  return (
    <div>
        <Slider/>
        <Container>
        <Title isSearch={false} title={constantes.TITLE_MAS_VALORADAS} />
      </Container>
      <Container>
        <ListarPeliculas peliculas={peliculas} />
      </Container>
      <Container className="m-auto d-flex justify-content-around pb-5">
        <CustomizeButton
          custom="primary"
          value="prev"
          Icon={FaChevronLeft}
          iconClassName="mx-1"
          onClick={handlePrevious}
          className="mx-2 bold"
        />
        <CustomizeButton
          custom="primary"
          value="next"
          Icon={FaChevronRight}
          iconClassName="mx-1"
          onClick={handleNext}
          className="mx-2 flex-row-reverse bold"
        />
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
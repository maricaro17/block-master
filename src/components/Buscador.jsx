import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Buscador = ({ filter, handleSearch, searchTerm }) => {
  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      dispatch(filter(searchTerm.toUpperCase()));
    }
  };
  return (
    <div>
      <Form className="search d-flex mx-5 w-100">
        <FormControl
          type="search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Busca tu pelicula favorita"
        />
        <button onClick={search}>
          <img
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652673386/block-master/Icon_xpzqis.svg"
            width="24"
            height="24"
            alt="buscador-icon"
          />
        </button>
      </Form>
    </div>
  );
};

export default Buscador;

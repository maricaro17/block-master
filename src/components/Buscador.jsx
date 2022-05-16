import React from "react";
import { Form, FormControl} from "react-bootstrap";

const Buscador = () => {
  return (
    <div>
      <Form className="search d-flex mx-5 w-100">
        <FormControl
          type="search"
          aria-label="Search"
          placeholder="Busca tu pelicula favorita"
        />
        <button>
          <img src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652673386/block-master/Icon_xpzqis.svg" width="24" height="24" alt="buscador-icon"  />
        </button>
      </Form>
    </div>
  );
};

export default Buscador;

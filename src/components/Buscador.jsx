import React from "react";
import { Form, FormControl, Button} from "react-bootstrap";

const Buscador = () => {
  return (
    <div>
      <Form className="search d-flex mx-5 w-100">
        <FormControl
          type="search"
          aria-label="Search"
        />
        <Button>
          <img src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652328493/block-master/Property_1_search_okkprg.svg" alt="buscador-icon" />
        </Button>
      </Form>
    </div>
  );
};

export default Buscador;

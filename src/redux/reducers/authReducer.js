import { Types } from "../type";

const initialState = {
  name: "",
  email: "",
  id: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.authRegister:
      return action.payload;
    default:
      return state;
  }
};

export {registerReducer}
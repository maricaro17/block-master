import { Types } from "../type";

const initialState = {
  name: "",
  email: "",
  id: ""
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.authRegister:
      return action.payload;
    default:
      return state;
  }
};
const authState = {
  isAuthenticated: false
};
const loginReducer = (state = authState, action) => {
  switch (action.type) {
    case Types.login:
      return action.payload;
    case Types.logout:
      return action.payload;
    default:
      return state;
  }
};

export { registerReducer, loginReducer };

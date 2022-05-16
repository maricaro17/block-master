import { Types } from "../type";

const initialState = {
  loading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case Types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export { uiReducer };

import { Types } from "../type";

const initialState = {
  isSearch: false,
  searchTerm: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.searchTitle:
      return {
        isSearch: action.payload.isSearch,
        searchTerm: action.payload.searchTerm,
      };
    default:
      return state;
  }
};

export { searchReducer };
import { Types } from "../type";

const initialState = {
  name: "",
  imageUrl:
    "https://www.laranayeltrebol.com/wp-content/uploads/2017/02/AlimentacionSaludable101-1200x310.jpg",
  movieId: "",
};

const stateList = [initialState];

const bannersReducer = (state = stateList, action) => {
  switch (action.type) {
    case Types.bannerList:
      return action.payload.length > 0 ? action.payload : state;
    default:
      return state;
  }
};

export { bannersReducer };

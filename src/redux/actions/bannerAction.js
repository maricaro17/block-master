import { Types } from "../type";
import { findAllBanner } from "../../services/banner";

const getBanners = () => {
  return async (dispatch) => {
    const bannerList = await findAllBanner();
    dispatch({
      type: Types.bannerList,
      payload: bannerList,
    });
  };
};

export { getBanners };

import { Types } from "../type";

const startLoading = () => ({ type: Types.uiStartLoading });

const finishLoading = () => ({ type: Types.uiFinishLoading });

export { startLoading, finishLoading };

import { fetchAPI } from "../../utils/fakeAPI";

export const initializeTimes = (curDate) => {
  return fetchAPI(new Date(curDate));
};

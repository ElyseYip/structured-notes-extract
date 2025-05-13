import {
  bankDetails,
  notesData,
  subscribedNotes,
  userDetails,
} from "../mockdata/mockdata";

const apiMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type !== "API") return;

    const state = getState();
    const {
      url,
      method,
      data,
      accessToken,
      onSuccess = () => {},
      onError = () => {},
      headers,
      name,
    } = action.payload;

    setTimeout(() => {
      let data;
      data = responseMap[name];
      onSuccess(dispatch, data);
    }, 1000);
  };

export default apiMiddleware;

const responseMap = {
  FETCH_NOTES: notesData,
  FETCH_BANK_DETAILS: bankDetails,
  FETCH_SUBSCRIBE: subscribedNotes,
  DISPLAY_ALL_USERS: userDetails,
};

// const FETCH_NOTES_RESPONSE = [{symbol:'AAAA', Price:2000, Amount:12, issued:1000}];

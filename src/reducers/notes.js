const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case "FETCH_NOTES": {
      return action.data;
    }
    default:
      return state;
  }
}

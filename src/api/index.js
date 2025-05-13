const apis = {
  FETCH_NOTES: {
    url: "/api/v1/mock",
    method: "GET",
    reqData: [],
  },
};

export function apiCall(options) {
  return {
    type: "API",
    payload: {
      ...apis[options.name],
      ...options,
      onSuccess: (dispatch, data, status) => {
        if (options.onSuccess) {
          options.onSuccess(data?.data, status);
        }

        dispatch({
          type: options.name,
          data,
        });
      },
    },
  };
}

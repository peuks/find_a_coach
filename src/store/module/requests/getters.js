export default {
  requests(state) {
    console.log("coucou");

    return state.requests;
  },
  hasRequests(state) {
    console.log("coucou");
    return state.requests && state.requests.length > 0;
  },
};

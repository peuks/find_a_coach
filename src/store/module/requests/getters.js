// export default {
//   requests(state, _, _2, rootGetters) {
//     const coachId = rootGetters.userId;

//     return state.requests.filter((req) => req.coachId === coachId);
//   },
//   hasRequests(_, getters) {
//     return getters?.requests?.length > 0;
//   },
// };

export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    console.log(coachId);
    console.log(
      state.requests.filter((req) => {
        req.coachId === coachId;
        console.log("req.coachId");
        console.log(req);
      })
    );
    return state.requests.filter((req) => req.coachId === coachId);
    // return state.requests;
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};

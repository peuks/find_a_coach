export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    console.log(state.coaches[1]);
    state.coaches = payload;
  },
};

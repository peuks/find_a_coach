export default {
  /**
   *
   * @param {Object} state
   * @param {Object} payload
   */
  addRequest(state, payload) {
    state.requests.push(payload);
  },
};

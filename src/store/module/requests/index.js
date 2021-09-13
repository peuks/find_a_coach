import mutations from "./mutations.js";
import actions from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions,
};

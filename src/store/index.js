import { createStore } from "vuex";
import coachesModule from "./module/coaches/index.js";
import requestsModule from "./module/requests/index.js";

const store = createStore({
  modules: {
    coaches: coachesModule,
    request: requestsModule,
  },
  state: {
    userId: "c3",
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;

export default {
  /**
   *
   * @param {String} state
   * @returns
   */
  coaches: (state) => state.coaches,

  /**
   *
   * @param {String} state
   * @returns true||false
   * Used to show a list of coaches if hasCoaches return true
   */
  hasCoaches: (state) => state.coaches?.length > 0,

  /**
   *
   * @param {String} state
   * @returns true||false
   * Return true if a coach has the checked id
   */
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
};

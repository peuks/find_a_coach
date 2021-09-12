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
};

import axios from "axios";
import { CoachesUrl, CoacheUrl } from ".";
import { getCoachesErrors } from "../utils/errors.utils";

// GET

/**
 *
 * @param {Number} userId the User Id
 * @param {Object} data formData from coaches' actions.js
 * @returns {Object} res reponse from DB
 */
export const postRequest = async (userId, data) => {
  const res = await axios.put(CoacheUrl(userId), data);

  return res;
};

// PUT

/**
 *
 * @param {Number} userId the User Id
 * @param {Object} data formData from coaches' actions.js
 * @returns {Object} res reponse from DB
 */
export const getCoaches = async () => {
  const res = await axios.get(CoachesUrl()).catch((error) => {
    const errors = getCoachesErrors(error);
    return errors;
  });
  return res;
};

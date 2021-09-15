import axios from "axios";
import { CoachesUrl, CoacheUrl, ContactCoacheUrl } from ".";
import {
  getCoachesErrors,
  postRequestCoachesErrors,
} from "../utils/errors.utils";

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

// POST

/**
 *
 * @param {Number} userId the User Id
 * @param {Object} bodyContent data from requests' actions.js
 * @returns {Object} res reponse from DB
 */
export const postRequestCoaches = async (coachId, bodyContent) => {
  const res = await axios
    .post(ContactCoacheUrl(coachId), bodyContent)
    .catch((error) => {
      const errors = postRequestCoachesErrors(error);
      return errors;
    });
  return res;
};

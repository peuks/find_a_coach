// FireBaseDB
const bdd_url = process.env.VUE_APP_FIRE_BASE_DB;

// Coaches
const coaches = "coaches";

// Requests
const requests = "requests";

export const CoachesUrl = () => `${bdd_url}/${coaches}.json `;

export const CoacheUrl = (userId) => {
  return `${bdd_url}/${coaches}/${userId}.json`;
};

export const ContactCoacheUrl = (coachId) =>
  `${bdd_url}${requests}/${coachId}.json`;

export const getRequestUrl = (coachId) => {
  let url = `${bdd_url}${requests}/${coachId}.json`;
  return url;
};

// FireBaseDB
const bdd_url = process.env.VUE_APP_FIRE_BASE_DB;

// Coaches
const coaches = "coaches";

// Requests
const requests = "requests";

export const CoachesUrl = () => `${bdd_url}/${coaches}.json`;

export const CoacheUrl = (userId) => `${bdd_url}/${coaches}/${userId}.json`;

export const ContactCoacheUrl = (coachId) =>
  `${bdd_url} ${requests}/${coachId}.json`;

//Searched game
// export const searchGameURL = (game_name) =>
//   `${base_url}games?search=${game_name}&${key_url}&page_size=9`;

const getCoachesErrors = (err) => {
  let message = "";
  switch (err.response.status) {
    case 404:
      message = "Erreur 404, l'erreur n'a pas pu aboutir :(";
      break;
    default:
      message = err.message;
  }
  throw new Error(message);
};

const postRequestCoachesErrors = (err) => {
  let message = "";
  switch (err.response.status) {
    case 404:
      message = "Erreur 404, l'erreur n'a pas pu aboutir :(";
      break;
    default:
      message = err.message;
  }
  throw new Error(message);
};

export { getCoachesErrors, postRequestCoachesErrors };

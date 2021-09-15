import { getRequestCoaches, postRequestCoaches } from "../../../api/requests";

export default {
  contactCoach(context, payload) {
    let newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const res = postRequestCoaches(payload.coachId, newRequest);
    newRequest = {
      ...newRequest,
      id: res.name, //name is the given param for Ids
      coachId: payload.coachId,
    };
    context.commit("addRequest", newRequest);
  },
  fetchRequests: async (context) => {
    const coachId = context.rootGetters.userId;

    const res = await getRequestCoaches(coachId);
    const requests = [];

    for (var i in res.data) {
      requests.push({
        id: i,
        coachId: coachId,
        ...res.data[i],
      });
    }
    context.commit("setRequests", requests);
  },
};

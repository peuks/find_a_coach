import { postRequestCoaches } from "../../../api/requests";

export default {
  contactCoach(context, payload) {
    let newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const res = postRequestCoaches(payload.coachId, newRequest);
    newRequest.id = res.name;
    newRequest = {
      ...newRequest,
      id: res.name,
      coachId: payload.coachId,
    };
    context.commit("addRequest", newRequest);
  },
};

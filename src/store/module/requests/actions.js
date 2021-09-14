import { uuid } from "uuidv4";

export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: uuid(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit("addRequest", newRequest);
  },
};

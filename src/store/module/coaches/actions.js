import { getCoaches, postRequest } from "../../../api/requests";

export default {
  // data = payload = fromData
  async registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    // Register Coach into FireBase Database
    await postRequest(coachData.id, coachData);

    context.commit("registerCoach", coachData);
  },
  async getCoaches(context) {
    const res = await getCoaches(context.rootGetters.userId);
    const coaches = [];
    Object.values(res.data).forEach((value) => {
      coaches.push({ ...value });
    });

    context.commit("setCoaches", coaches);
  },
};

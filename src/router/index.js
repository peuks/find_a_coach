import { createRouter, createWebHistory } from "vue-router";

import ContactCoach from "../pages/requests/ContactCoach.vue";
import NotFound from "../pages/requests/NotFound.vue";
import RequestReceived from "../pages/requests/RequestReceived.vue";

import CoachDetail from "../pages/coaches/CoachDetail.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import CoachesRegistration from "../pages/coaches/CoachesRegistration.vue";

const routes = [
  { path: "/", redirect: "coaches" },
  { path: "/coaches", name: "Coaches", component: CoachesList },
  {
    path: "/coaches/:id",
    // with pros: true the :id will be set as a props in CoachDetail.vue
    props: true,
    name: "Coache",
    component: CoachDetail,
    children: [{ path: "contact", component: ContactCoach }],
  },
  { path: "/contact", name: "Contact", component: CoachesRegistration },
  { path: "/register", name: "Register", component: CoachesRegistration },
  { path: "/requests", name: "Requests", component: RequestReceived },
  { path: "/:notFount(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

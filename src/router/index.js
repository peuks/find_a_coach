import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  { path: "/coaches", name: "Coaches", component: null },
  {
    path: "/coaches/:id",
    name: "Coache",
    component: null,
    children: [{ path: "contact", component: null }],
  },
  { path: "/", redirect: "coaches" },
  { path: "/contact", name: "Contact", component: null },
  { path: "/register", name: "Register", component: null },
  { path: "/requests", name: "Requests", component: null },
  { path: "/:notFount(.*)", name: "NotFound", component: null },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

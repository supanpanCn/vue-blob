import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/index.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

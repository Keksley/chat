import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/messages",
    name: "Messages",
    component: () => import("../views/Messages.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

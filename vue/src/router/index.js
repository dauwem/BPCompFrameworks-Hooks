import Vue from "vue";
import VueRouter from "vue-router";

// views
import ConfirmedGraph from "../views/ConfirmedGraph.vue";
import CuredGraph from "../views/CuredGraph.vue";
import DeadGraph from "../views/DeadGraph.vue";

Vue.use(VueRouter);

const routes = [
  /* {
    path: "/",
    redirect: "/confirmed"
  }, */
  {
    path: "/confirmed",
    name: "Confirmed",
    component: ConfirmedGraph
  },
  {
    path: "/cured",
    name: "Cured",
    component: CuredGraph
  },
  {
    path: "/dead",
    name: "Dead",
    component: DeadGraph
  },
  {
    path: "*",
    redirect: "/confirmed"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

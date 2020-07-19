import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/index/index.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      component: Index,
    },
  ],
});

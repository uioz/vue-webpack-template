import VueRouter from "vue-router";
import Index from "../pages/index/index.vue";

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

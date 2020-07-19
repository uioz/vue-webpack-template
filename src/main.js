import Vue from "vue";
import App from "./app.vue";
import store from "./store";
import router from "./router";

const vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#root");

// for running testing
/* eslint-disable no-undef */
if (process.env.NODE_ENV !== "production") {
  /* eslint-enable no-undef */
  window.vue = vue;
  window.vuex = store;
}

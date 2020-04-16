import Vue from "vue";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

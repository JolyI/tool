import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "lib-flexible";
import FastClick from "fastclick";
import Mintui from "mint-ui";
import "mint-ui/lib/style.css";
FastClick.attach(document.body);
import Api from "./api/http";
import Keys from "./api/key";

Vue.use(Mintui);
Vue.prototype.$keys = Keys;
Vue.prototype.$http = new Api();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueI18n from "vue-i18n";

// Vue.use(VueI18n);

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  VueI18n,
  router,
  store,
  components: { App },
  render: (h) => h(App),
  el: "#app",
  template: "<App/>",
}).$mount("#app");

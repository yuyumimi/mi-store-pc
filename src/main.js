import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import "./assets/js/jquery-3.3.1.min"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
import { Toast, Notify, Dialog } from "vant";
import store from './store'
Vue.prototype.$toast = Toast;
Vue.prototype.$notify = Notify;
Vue.prototype.$dialog = Dialog;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

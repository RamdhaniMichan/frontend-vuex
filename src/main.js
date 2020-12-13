import Vue from 'vue'
import App from './App.vue'
import routes from './Routes'
import BootstrapVue from  'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router : routes,
  render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import Press from './components/Press.vue'
import About from './components/About.vue'
import HireEmployee from './components/HireEmployee.vue'
import ProfileEmployee from './components/ProfileEmployee.vue'
import RegisterCompany from './components/RegisterCompany.vue'
import RegisterAttendance from './components/RegisterAttendance.vue'
//import Form from './components/Form.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/foo', component: App  },
  { path: '/press', component: Press , props: {msg:'Press'}},
  { path: '/about', component: About , props: {msg:'About'}},
  { path: '/hireemployee', component: HireEmployee , props: {msg:'HireEmployee'}},
  { path: '/profileemployee', component: ProfileEmployee , props: {msg:'ProfileEmployee'}},
  { path: '/registerCompany', component: RegisterCompany , props: {msg:'RegisterCompany'}},
  { path: '/RegisterAttendance', component: RegisterAttendance , props: {msg:'RegisterAttendance'}}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

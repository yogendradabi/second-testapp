import Vue from 'vue'
import App from './App.vue'
import Press from './components/Press.vue'
import About from './components/About.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/foo', component: App  },
  { path: '/press', component: Press , props: {msg:'Press'}},
  { path: '/about', component: About , props: {msg:'About'}}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

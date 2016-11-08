import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/time-entries', component: TimeEntries },
  { path: '/time-entries/log-time', component: LogTime },
  { path: '*', redirect: '/home' }
]

var router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})

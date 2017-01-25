import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'

import List from './components/List'
import New from './components/New'
import Detail from './components/Detail'

Vue.use(VueRouter)
Vue.use(VueFire)

const router = new VueRouter({
	mode: 'history',
  routes: [
	{ path: '/', component: List },
	{ path: '/new', component: New },
	{ path: '/:id', component: Detail }
]
})

new Vue({
   router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
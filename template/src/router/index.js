import Vue from 'vue'
import Router from 'vue-router'
import Hello from './hello'
const routes = [...Hello]

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		...routes
	]
})

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
{{#VueLazyload}}
import VueLazyload from 'vue-lazyload'
{{/VueLazyload}}

import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.use(VueRouter)
Vue.use(Vuex)

{{#VueLazyload}}
const loadingImg = require('./assets/images/lazyload/default.jpg')
const errorImg = require('./assets/images/lazyload/error.png')
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: errorImg,
	loading: loadingImg,
	try: 3
})
{{/VueLazyload}}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})

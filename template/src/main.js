import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
{{#if_eq proType "admin"}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
// 全局样式
import '@/assets/scss/index.scss'
// 路由鉴权
import '@/permission'
Vue.use(ElementUI, { locale })
{{/if_eq}}

{{#if_eq proType "mobile"}}
import FastClick from 'fastclick'
FastClick.attach(document.body)
{{/if_eq}}

{{#fundebug}}
const fundebug = require('fundebug-javascript')
// apikey 可根据实际情况填写
fundebug.apikey = '1d6ad910c71b779a7a695fb9b4c71b1d094a3440c0068446ef94ac0aebfb1baa'
{{/fundebug}}
Vue.use(VueRouter)
Vue.use(Vuex)

const loadingImg = require('./assets/images/lazyload/default.jpg')
const errorImg = require('./assets/images/lazyload/error.png')
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: errorImg,
	loading: loadingImg,
	try: 3
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})

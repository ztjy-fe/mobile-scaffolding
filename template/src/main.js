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
import '@/assets/scss/index.scss' // global css
import '@/permission' // permission control
Vue.use(ElementUI, { locale })
{{/if_eq}}

{{#if_eq proType "mobile"}}
import FastClick from 'fastclick'
FastClick.attach(document.body)
{{/if_eq}}
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

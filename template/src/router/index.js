import Vue from 'vue'
import Router from 'vue-router'

{{#if_eq proType "mobile"}}
import Hello from './hello'
const routes = [...Hello]
{{/if_eq}}
{{#if_eq proType "admin"}}
import Login from './login'
const routes = [...Login]
{{/if_eq}}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...routes
  ]
})

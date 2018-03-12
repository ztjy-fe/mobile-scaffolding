import Vue from 'vue'
import Vuex from 'vuex'
{{#if_eq proType "admin"}}
import User from './modules/user'
{{/if_eq}}
Vue.use(Vuex)
{{#if_eq proType "admin"}}
export default new Vuex.Store({
	modules: {
		User
	}
})
{{/if_eq}}
{{#if_eq proType "mobile"}}
export default new Vuex.Store({

})
{{/if_eq}}

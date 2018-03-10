import { UserApi } from '@/api/index'
import { UserMock } from '@/mock/index'
import authUtils from '@/utils/auth'

const User = {
	namespaced: true,

	state: {
		token: authUtils.getToken()
	},

	getters: {
		getUsername (state) {
			return state.token
		}
	},

	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		}
	},

	actions: {
		// 登录
		login ({ commit }, userInfo) {
			const username = userInfo.username.trim()
			return new Promise((resolve, reject) => {
				UserMock.loginMock()
				UserApi.login({
					username: username,
					password: userInfo.password
				}, response => {
					const userToken = response.token
					authUtils.setToken(userToken)
					commit('SET_TOKEN', userToken)
					resolve()
				})
			})
		},

		// 获取用户信息
		getUserInfo ({ commit, state }) {
			return new Promise((resolve, reject) => {
				UserMock.getUserInfoMock()
				UserApi.getUserInfo({}, response => {
					resolve(response)
				})
			})
		},

		// 登出
		logout ({ commit, state }) {
			return new Promise((resolve, reject) => {
				UserMock.logoutMock()
				UserApi.logout({}, response => {
					commit('SET_TOKEN', '')
					authUtils.removeToken()
					resolve()
				})
			})
		},

		// 前端 登出
		fedLogOut ({ commit }) {
			return new Promise(resolve => {
				commit('SET_TOKEN', '')
				authUtils.removeToken()
				resolve()
			})
		}
	}
}

export default User


const getCookie = require('szyutils/modules/getCookie')
const setCookie = require('szyutils/modules/setCookie')
const removeCookie = require('szyutils/modules/removeCookie')

const TokenKey = 'Admin-Token'

export default {
	// 获取token
	getToken () {
		return getCookie(TokenKey)
	},

	// 设置token
	setToken (token) {
		return setCookie(TokenKey, token, 10)
	},

	// 删除token
	removeToken () {
		return removeCookie(TokenKey)
	}
}

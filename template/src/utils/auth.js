
const getCookie = require('szyutils/modules/getCookie')
const setCookie = require('szyutils/modules/setCookie')
const removeCookie = require('szyutils/modules/removeCookie')

const TokenKey = 'Admin-Token'

export default {
	getToken () {
		return getCookie(TokenKey)
	},

	setToken (token) {
		return setCookie(TokenKey, token, 10)
	},

	removeToken () {
		return removeCookie(TokenKey)
	}
}

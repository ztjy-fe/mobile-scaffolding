import axios from 'axios'
const instance = axios.create({
	timeout: 15000
})
const API = {
	get (url, params, callback) {
		return new Promise((resolve, reject) => {
			instance.get(url, {
				params: params
			}).then((response) => {
				if (response.data.code === 10000) {
					callback && callback(response.data.body)
					resolve(response.data.body)
				} else {
					reject(response.data.message)
				}
			}).catch((error) => {
				reject(error)
			})
		})
	},
	post (url, params, callback) {
		return new Promise((resolve, reject) => {
			instance.post(url, params).then((response) => {
				if (response.data.code === 10000) {
					callback && callback(response.data.body)
					resolve(response.data.body)
				} else {
					reject(response.data.message)
				}
			}).catch((error) => {
				reject(error)
			})
		})
	}
}

export { API }

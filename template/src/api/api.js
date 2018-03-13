import axios from 'axios'

const instance = axios.create({
	timeout: 15000
})

const API = {
	get (url, params, callback) {
		return new Promise((resolve, reject) => {
			instance.get(url, params).then((response) => {
				if (response.data.returncode === 10000) {
					callback && callback(response.data.data)
					resolve(response.data.data)
				} else {
					console.log('服务器错误:' + response.data.message)
					reject(response.data.message)
				}
			}).catch((error) => {
				console.log('服务器错误!' + error)
				reject(error)
			})
		})
	},
	post (url, params, callback) {
		return new Promise((resolve, reject) => {
			instance.post(url, params).then((response) => {
				if (response.data.returncode === 10000) {
					callback && callback(response.data.data)
					resolve(response.data.data)
				} else {
					console.log('服务器错误:' + response.data.message)
					reject(response.data.message)
				}
			}).catch((error) => {
				console.log('服务器错误!' + error)
				reject(error)
			})
		})
	}
}

export { API }

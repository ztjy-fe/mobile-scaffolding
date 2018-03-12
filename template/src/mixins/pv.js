
export default {
	data: function () {
		return {
			enterTime: 0
		}
	},
	mounted: function () {
		this.enterTime = new Date().getTime()
	},
	destroyed: function () {
		const staytime = new Date().getTime() - this.enterTime
		console.log('停留时间：' + staytime)
	}
}


export default {
	data: function() {
		return {
			enterTime: 0
		}
	},
	activated: function() {
		this.enterTime = new Date().getTime()
	},
	deactivated: function() {
		const staytime = new Date().getTime() - this.enterTime
		console.log('停留时间：' + staytime)
	}
}
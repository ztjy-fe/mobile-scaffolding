import Vue from 'vue'

Vue.directive('statistic', {
	inserted: function (el, binding, vnode) {
		const objId = el.getAttribute('obj-id')
		el.onclick = function () {
			console.log('报数ID：' + objId)
		}
	}
})

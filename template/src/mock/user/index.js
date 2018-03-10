import Mock from 'mockjs'
import * as ApiMaps from '@/api/apiMaps'

const Random = Mock.Random
Random.now('yyyy-MM-dd HH:mm:ss')
Random.extend({
	nickname: function () {
		const names = ['小明', '小黄', '小红', '小张', '小花', '小赵', '小钱', '小孙', '小李', '小周', '小吴', '小郑']
		return this.pick(names)
	}
})

// 用户登录
export const loginMock = () => {
	Mock.mock(ApiMaps.SYSTEM.USER.LOGIN, {
		'returncode': 10000,
		'message': 'success',
		'data': {
			'token': 'admin'
		}
	})
}

// 获取用户信息
export const getUserInfoMock = () => {
	Mock.mock(ApiMaps.SYSTEM.USER.INFO, {
		'returncode': 10000,
		'message': 'success',
		'data': {
			'token': 'admin'
		}
	})
}

// 登出
export const logoutMock = () => {
	Mock.mock(ApiMaps.SYSTEM.USER.LOGOUT, {
		'returncode': 10000,
		'message': 'success',
		'data': {}
	})
}

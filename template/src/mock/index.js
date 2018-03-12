
{{#if_eq proType "admin"}}
import * as UserMock from '@/mock/user/index'

export {
	UserMock
}
{{/if_eq}}
{{#if_eq proType "mobile"}}
export default{}
{{/if_eq}}

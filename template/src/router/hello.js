
const _import = require('./import_' + process.env.NODE_ENV)
const Index = _import('Index')

export default [{
	path: '/',
	name: 'Index',
	component: Index
}]

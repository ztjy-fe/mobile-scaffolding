// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
	"plugins": {
		"postcss-import": {},
		"postcss-url": {},
		// to edit target browsers: use "browserslist" field in package.json
		"autoprefixer": {},
		// 以750px设计稿为例, 1rem对应75px
		"postcss-px2rem": {
			remUnit: 75
		}
	}
}

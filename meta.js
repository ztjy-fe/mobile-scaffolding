module.exports = {

	"helpers": {
		"if_or": function (v1, v2, options) {
			if (v1 || v2) {
				return options.fn(this);
			}

			return options.inverse(this);
		}
	},
	"prompts": {
		"name": {
			"type": "string",
			"required": true,
			"message": "Project name"
		},
		"description": {
			"type": "string",
			"required": false,
			"message": "Project description",
			"default": "A Vue.js project"
		},
		"author": {
			"type": "string",
			"message": "Author"
		},
		"WXShare":{
			"type": "confirm",
			"message": "Import Weixin JS-SDK for your project?"
		},
		"Moblink":{
			"type": "confirm",
			"message": "Import Moblink.js for your project?"
		},
		"VueLazyload":{
			"type": "confirm",
			"message": "Install VueLazyload?"
		},
		"fundebug":{
			"type": "confirm",
			"message": "Install fundebug to monitor javascript?"
		}
	},
	"filters": {
		"src/assets/images/lazyload/*": "VueLazyload"
	},
	"completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/ztjy-fe/scaffolding"
};

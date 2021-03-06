### mobile-scaffolding脚手架

在使用vue-cli的过程中，常用的webpack模板只为我们提供最基础的内容，但每次需要新建一个项目的时候就需要把之前项目的一些配置都搬过来，这样就造成挺大的不方便，作为一个团队，维护一个通用的模板，是很有必要的。  

关于vue-cli的源码分析可以参考下这个文章[从vue-cli源码学习如何写模板](https://github.com/dwqs/blog/issues/56 )  


``ztjy-fe/mobile-scaffolding``目录如下，

```
│  .gitignore
│  LICENSE
│  meta.js   //该文件必须导出为一个对象, 用于定义模板的 meta 信息
│  package.json
│  README.md
└─template  //模板的内容
```
#### meta.js

``meta.js ``主要是定义模板的一些配置, 目前可定义的字段如下:

- prompts<Object>: 收集用户自定义数据
- filters<Object>: 根据条件过滤文件
- completeMessage<String>: 模板渲染完成后给予的提示信息, 支持 handlebars 的 mustaches 表达式
- complete<Function>: 模板渲染完成后的回调函数, 优先于 completeMessage
- helpers<Object>: 自定义的 Handlebars 辅助函数

#### prompts

看下 ``prompts``的代码
```
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
		"message": "是否加载微信JS-SDK？"
	},
	"Moblink":{
		"type": "confirm",
		"message": "是否集成Deep Link解决方案Moblink.js？"
	},
	"VueLazyload":{
		"type": "confirm",
		"message": "是否安装图片延迟加载插件VueLazyload？"
	}
	...
}

```
所有的用户输入完成之后, ``template`` 目录下的所有文件将会用 ``Handlebars``（[了解相关的语法点这里](http://handlebarsjs.com/)） 进行渲染. 用户输入的数据会作为模板渲染时的使用数据,例如，在``cmd``选择使用``VueLazyload``后，

```
	"VueLazyload":{
		"type": "confirm",
		"message": "是否安装图片延迟加载插件VueLazyload？"
	}
```

安装过程中，就会询问是否安装``VueLazyload``插件


#### helper

上面的``if_eq``，还有源码中的``unless_eq``是原本vue-cli中注册的辅助函数，在vue-cli中的generate.js：

```
# vue-cli/lib/generate.js

//...

// register handlebars helper
Handlebars.registerHelper('if_eq', function (a, b, opts) {
return a === b
	? opts.fn(this)
	: opts.inverse(this)
})

Handlebars.registerHelper('unless_eq', function (a, b, opts) {
return a === b
	? opts.inverse(this)
	: opts.fn(this)
})
```
类似的，你也可以自定义一些函数，方便你自己去处理一些数据，在``meta.js``中``helpers``对象中可以加入自己的方法，如源码中就有注册一个``if_or``的方法,你在文件中就可以用``{{#if_or a b}}{{/if_or}}``去使用

```
"helpers": {
	"if_or": function (v1, v2, options) {
		if (v1 || v2) {
			return options.fn(this);
		}

		return options.inverse(this);
	}
},
```

#### filters
``filters`` 是根据条件过滤文件，源码:
```
 "filters": {
	"src/assets/images/lazyload/*": "VueLazyload"  //例如上面的 VueLazyload 为true的时候，就会加入这个目录
}
```
后续的话只需要将自己需要的文件跟文件夹，加入到``template/src``

最后,提交到github自己的分支上，就可以使用了

```
szy create project-name

```
#### github地址
[https://github.com/ztjy-fe/mobile-scaffolding](https://github.com/ztjy-fe/mobile-scaffolding)

#### 参考：  
[vue-cli webpack的配置详解](http://blog.csdn.net/hongchh/article/details/55113751 )  
[从vue-cli源码学习如何写模板 ](https://github.com/dwqs/blog/issues/56)  

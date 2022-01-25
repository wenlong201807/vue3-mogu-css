// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/dragon-mogujie/'
		: '/',
	devServer: {
		// proxy: {
		// 	'/api/*': {
		// 		target: 'https://www.easy-mock.com/mock/5fb49a3d8ab3eb27be073c08/mogujie',
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			'^/api': ''
		// 		}
		// 	}
		// }
	},
  css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-plugin-px2rem')({
						// 依据设计稿的大小定制 或者75
						// 此处写的37.5 页面看效果的时候，页面宽度设置为375宽度进行调试，查看
						rootValue: 37.5, 
						exclude: /(node_module)/,
						minPixelValue: 3, // 大于3px以上的数据才进行转换计算
						// selectorBlackList:['van']
					})
					// require('postcss-px-to-viewport')({
					// 	viewportWidth: 750,
					// 	exclude: /(node_module)/,
					// 	unitPrecision: 3,
						// selectorBlackList:['van']
					// })
				]
			},
			scss: {
				// 全局变量导入方式
				// 此作用等效于 在每个style标签中引入这个样式
				prependData: `
					@import "@/style/gobal.scss";
        `
			}
		}
	},
	// chainWebpack(config) {
	// 	config.module
	// 		.rule("svg")
	// 		.exclude.add(resolve('src/style/base/fonts'))
	// 		.end()
		
	// 	config.module
	// 		.rule('icons')
	// 		.test(/\.svg$/)
	// 		.include.add(resolve('src/style/base/fonts'))
	// 		.end()
	// 		.use('svg-sprite-loader')
	// 			.loader('svg-sprite-loader')
	// 			.options({
	// 				symbolId: 'icon-[name]'
	// 			})
	// 			.end()
	// }
}
// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: false,
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		port: 8088,
		sellUrl: 'http://www.potato369.com:8088/sell',
		openidUrl: 'https://www.potato369.com/sell/wechat/authorize',
		wechatPayUrl: 'https://www.potato369.com/sell/pay/create'
    // sellUrl: 'http://sell.com',
    // openidUrl: 'https://potato369.mynatapp.cc/sell/wechat/authorize',
    // wechatPayUrl: 'https://potato369.mynatapp.cc/sell/pay/create'
	},
	dev: {
		env: require('./dev.env'),
		port: 8088,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false,
    sellUrl: 'http://sell.com',
    openidUrl: 'https://potato369.mynatapp.cc/sell/wechat/authorize',
    wechatPayUrl: 'https://potato369.mynatapp.cc/sell/pay/create'
	}
}

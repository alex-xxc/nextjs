const withLESS = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const fs = require('fs')
const path = require('path')
const { ANALYZE } = process.env
// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => { }
}

module.exports = {
    distDir: 'build',
    generateBuildId: async () => {
        // For example get the latest git commit hash here
        return 'my-build-id'
    },
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' }
        }
    },
    webpack(config, ...args){
        config = withLESS({
            lessLoaderOptions: {
                javascriptEnabled: true,
                // modifyVars: lessToJS(
                //     fs.readFileSync(path.resolve(__dirname, './static/css/antd.less'), 'utf8')
                // ),
            },
        }).webpack(config, ...args);
        if (ANALYZE) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: true
            }))
        }
        return config;
    }
}
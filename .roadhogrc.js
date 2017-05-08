export default {
  entry: 'src/index.js',
  publicPath: '/dva-antd-starter/',
  disableCSSModules: false,
  autoprefixer: null,
  proxy: null,
  extraBabelPlugins: [
    'transform-runtime',
    ['import', {
      libraryName: 'antd',
      style: true
    }]
  ],
  env: {
    production: {
      define: {
        __CDN__: ''
      }
    },
    development: {
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  }
};

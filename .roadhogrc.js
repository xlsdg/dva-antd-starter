export default {
  entry: 'src/index.js',
  publicPath: '/dva-antd-starter/',
  disableCSSModules: false,
  autoprefixer: {
    browsers: [
      'last 7 versions',
      'Android >= 4.2',
      'iOS >= 6'
    ]
  },
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

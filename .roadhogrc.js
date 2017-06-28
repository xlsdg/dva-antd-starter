export default {
  entry: 'src/index.js',
  multipage: true,
  publicPath: '/',
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
      publicPath: '/dva-antd-starter/'
    },
    development: {
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  }
};

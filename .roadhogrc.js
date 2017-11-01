export default {
  hash: true,
  entry: 'src/index.js',
  disableCSSModules: false,
  ignoreMomentLocale: true,
  autoprefixer: {
    browsers: [
      'last 7 versions',
      'Android >= 4.2',
      'iOS >= 6'
    ]
  },
  extraBabelPlugins: [
    'transform-runtime',
    ['import', {
      libraryName: 'antd',
      style: true
    }]
  ],
  env: {
    production: {
      multipage: true,
      publicPath: '/dva-antd-starter/'
    },
    development: {
      multipage: false,
      publicPath: '/',
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  }
};

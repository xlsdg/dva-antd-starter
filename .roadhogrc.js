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
    development: {
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  }
};

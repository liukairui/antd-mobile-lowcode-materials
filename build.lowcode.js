const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src'
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: '@alilc',
        builtinAssets: [
          {
            packages: [
              {
                library: 'moment',
                package: 'moment',
                urls: ['https://unpkg.com/moment@2.24.0/min/moment.min.js'],
                version: '2.24.0'
              },
              {
                library: '_',
                package: 'lodash',
                urls: ['https://unpkg.com/lodash@4.6.1/lodash.min.js'],
                version: '2.24.0'
              }
            ],
            components: []
          }
        ]
      }
    ]
  ]
};

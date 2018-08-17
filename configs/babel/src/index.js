module.exports = ((api) => {
  api.assertVersion(7);
  api.cache.forever();
  return {
    plugins: [
      [
        require('babel-plugin-emotion'),
        {
          "autoLabel": true
        }
      ],
      require('@babel/plugin-proposal-object-rest-spread')
    ],
    presets: [
      [
        require('@babel/preset-env'),
        {
          modules: false,
          targets: {
            browsers: require('@acadiasoft/browserslist-config')
          }
        }
      ]
    ]
  };
});

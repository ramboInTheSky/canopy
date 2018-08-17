const path = require("path");
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [{
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: ".storybook/tsconfig.json",
          useBabel: true,
          "babelOptions": {
            "babelrc": false,
            "plugins": ["emotion"],
            "presets": [
              "react", ["env", {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7"]
                }
              }]
            ]
          }
        }
      },

      //require.resolve("react-docgen-typescript-loader"),
    ],
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, '../styles/**/src')
  });

  config.module.rules.push({
    test: /\.css$/,
    loaders: ["style-loader", "css-loader"],
    include: path.resolve(__dirname, '../styles/**/lib')
  });

  config.resolve.extensions.push(".js", ".jsx",".ts", ".tsx", ".css", ".scss");
  return config;
};

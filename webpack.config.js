var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },

  module: {

    rules: [ 
      {
      // rules for modules (configure loaders, parser options, etc.)
      
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
        
        // tells the loader that it applys to js file only
        test: /\.js?$/,
        
        // files that no need to convert by babel
        exclude: /node_modules/
      }
  ]}
}
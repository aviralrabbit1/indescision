// Entry point -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, // files ending in .js
            exclude: /node_modules/
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 6000,
      },
};

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
        }, 
        {
            test: /\.s?css$/,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
        }
        ]
    },
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
      },
};

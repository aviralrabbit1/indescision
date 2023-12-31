# Notes app

### For building convenience, use live-server
```
yarn add global live-server
```

or
```sh
npm install -g live-server
```

### Setting up babel locally,
```sh
yarn global add babel-cli
```

### Initalize a package.json with -
```sh
yarn init
```

### Babel can convert JSX syntax and this preset can be installed with
```sh
yarn add --dev @babel/preset-react
```
### @babel/preset-env allows to use the latest JavaScript without needing to micromanage which syntax transforms and browser polyfills are needed by the target environment(s).
```sh
yarn add --dev @babel/preset-env
```

we can also install them together like- 
```sh
yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

To create a continuously babel transpiled file, run
```sh
npx babel src/app.js --watch --out-file public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
```
or to transpile every file of a directory to another,
```sh
npx babel src --watch --out-dir public/scripts --presets=@babel/preset-env,@babel/preset-react
```

#### To access any specific file,
```sh
npx babel path/to/input-file.js --watch --out-file path/to/output-file.js --presets=@babel/preset-env,@babel/preset-react
```

### To solve issue #3, TODO! 

following [React 18 update](https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis)
```sh
yarn add react react-dom
```

### Install webpack
```sh
yarn add webpack
```
and
```sh
yarn add -D webpack-cli
``` 

### Install validator
```sh
yarn add validator
```

### Install babel-loader
```sh
yarn add babel-loader
```

### `webpack.config.js` file setup
```js
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
    }
};

```

### `.babelrc` file setup
```json
{
    "presets": [
        "@babel/env",
        "@babel/react"
    ]
}
```

### Devtool
It is a string property in webpack which controls if and how source maps are generated.
```json
// weback.config.js
module.exports = {
    ...
    devtool: 'eval-cheap-module-source-map'
    ...
};
```

### webpack-dev-server
```sh
yarn add webpack-dev-server --save-dev
```

Configure the `webpack.config.js`
```json
module.exports = {
    ...
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
      },
    ...
};
```

and the `package.json`,
```json
  {
    ...
        "scripts": {
        "build": "webpack",
        "serve": "webpack serve",
        "build-watch": "webpack --watch",
        "build-babel": "npx babel src/app.js --watch --out-file public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react",
        "dev-server": "webpack-dev-server"
    },
  ...
  }
```

### To transform class properties,
```sh
yarn add --dev @babel/plugin-transform-class-properties
```
### Third-Party component - `Modal`
```sh
yarn add react-modal
```

### For Styling, install

1. `css-loader`: Interprets @import and url() like import/require() and will resolve them.
2. `style-loader`: Inject CSS into the DOM.

```sh
yarn add -D css-loader style-loader
```

3. `sass-loader`: Loads a Sass/SCSS file and compiles it to CSS.
```sh
yarn add -D sass-loader sass
```

4. `node-sass`: It is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass. It allows native compilation of .scss files to css at incredible speed and automatically via a connect middleware.
```sh
yarn add node-sass
```

5. `normalize.css`: It makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
```sh
yarn add normalize.css
```

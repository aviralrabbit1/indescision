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
yarn add --dev @babel/core @babel/cli @babel/preset-env
```

To create a continuously babel transpiled file, run
```sh
./node_modules/@babel src/app.js --out-dir public --presets=@babel/preset-env,@babel/react --watch
```

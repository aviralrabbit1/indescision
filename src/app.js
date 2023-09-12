console.log('App is running');

var template = <h1 id="someID">JSX is rendering, Change is now reflected</h1>;

var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(template, appRoot);

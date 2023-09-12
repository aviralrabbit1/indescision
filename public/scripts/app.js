"use strict";

console.log('App is running');
var template = /*#__PURE__*/React.createElement("h1", {
  id: "someID"
}, "JSX is rendering, Change is now reflected");
var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(template, appRoot);

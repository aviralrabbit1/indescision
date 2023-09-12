"use strict";

console.log('App is running');
var template = /*#__PURE__*/React.createElement("h1", {
  id: "someID"
}, "JSX is rendering");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

"use strict";

console.log('App is running');
var user = {
  name: 'Aviral Verma',
  Age: 26,
  location: 'Mirzapur'
};

// JSX javascript XML
var template = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
  id: "someID"
}, "JSX is rendering, Change is now reflected"), /*#__PURE__*/React.createElement("h3", null, "Some info"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, user.name.toUpperCase()), /*#__PURE__*/React.createElement("li", null, "age: ", user.Age), /*#__PURE__*/React.createElement("li", null, "Software Developer"), /*#__PURE__*/React.createElement("li", null, "Location: ", user.location)));
var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(template, appRoot);

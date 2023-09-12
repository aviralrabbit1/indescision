"use strict";

console.log('App is running');
var user = {
  name: 'Aviral Verma',
  age: 26,
  location: 'Mirzapur'
};

// JSX javascript XML
var template = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
  id: "someID"
}, "JSX is rendering, Change is now reflected"), /*#__PURE__*/React.createElement("h3", null, "Some info"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, user.name.toUpperCase()), user.age && user.age >= 18 && /*#__PURE__*/React.createElement("li", null, "age: ", user.age), /*#__PURE__*/React.createElement("li", null, "Software Developer"), /*#__PURE__*/React.createElement("li", null, "Location: ", user.location ? user.location : 'Banglore')));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

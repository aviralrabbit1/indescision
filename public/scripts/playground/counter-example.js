"use strict";

console.log('App is running');
var app = {
  title: 'Notes App',
  subtitle: 'Create short notes',
  options: ['first', 'second']
};
var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log('addOne');
};
var minuOne = function minuOne() {
  count--;
  renderCounterApp();
  console.log('minuOne');
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log('reset');
};
var appRoot = document.getElementById('app');
var renderCounterApp = function renderCounterApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Count: ", count, " "), /*#__PURE__*/React.createElement("button", {
    id: "decrementor",
    className: "button",
    onClick: minuOne
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    id: "reset",
    className: "button",
    onClick: reset
  }, "reset"), /*#__PURE__*/React.createElement("button", {
    id: "incrementor",
    className: "button",
    onClick: addOne
  }, "+1"));
  ReactDOM.render(template, appRoot);
};

// console.log(template);

renderCounterApp();

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

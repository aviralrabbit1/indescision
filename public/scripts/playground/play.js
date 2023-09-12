"use strict";

console.log('App is running');
var app = {
  title: 'Notes App',
  subtitle: 'Create short notes',
  options: ['first', 'second']
};
function getTitle(title) {
  if (title) return title;else return 'Notes';
}
function getSubtitle(subtitle) {
  if (subtitle) return /*#__PURE__*/React.createElement("h3", null, subtitle);else return undefined; // similar to not having an else statement    
}

var appTemplate = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
  id: "title"
}, getTitle(app.title)), app.subtitle && getSubtitle(app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are the notes:' : 'No notes', " "), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item 1"), /*#__PURE__*/React.createElement("li", null, "Item 2")));
var count = 0;
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Count: ", count, " "), /*#__PURE__*/React.createElement("button", {
  id: "incrementor"
}, "+1"));
var appRoot = document.getElementById('app');

// issue #3
// import { createRoot } from 'react-dom/client';
// const root = createRoot(appRoot); // createRoot(container!) if you use TypeScript

ReactDOM.render(template, appRoot);
